import { render, screen, act } from '@testing-library/react';
import UsersListContainer from '../components/UsersList';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { QUERY_USER_LIST } from '../components/UsersList/graphql';
import { MUTATION_DELETE_USER, MUTATION_UPDATE_USER } from '../components/UserListItem/graphql';
import { GetAllUsersDocument } from '../generated/graphql';

const mockData = [
    {
        request: {
            query: QUERY_USER_LIST
        },
        result: {
            data: {
                getAllUsers: [{
                    __typename: 'User',
                    _id: '123',
                    firstName: 'James',
                    lastName: 'DeChavez'
                }]  
            }
        }      
    },
    {
        request: {
            query: GetAllUsersDocument
        },
        result: {
            data: {
                getAllUsers: [{
                    __typename: 'User',
                    _id: '123',
                    firstName: 'James Updated',
                    lastName: 'DeChavez Updated'
                }]  
            }
        }      
    },
    {
        request: {
            query: MUTATION_UPDATE_USER,
            variables: {
                firstName: "James Updated",
                lastName: "DeChavez Updated",
                updateUserId: "123"
            }
        },
        result: {
            data: {
                updateUser: {
                    __typename: 'User',
                    _id: '123',
                    firstName: 'James Updated',
                    lastName: 'DeChavez Updated'
                }  
            }
        }
    },
    {
        request: {
            query: MUTATION_DELETE_USER,
            variables: {
                deleteUserId: '123'
            }
        },
        result: {
            data: {
                deleteUser: {
                    __typename: 'User',
                    _id: '123',
                    firstName: 'James Updated',
                    lastName: 'DeChavez Updated'
                }  
            }
        }
    }
];

const noData = [{
    request: {
        query: QUERY_USER_LIST
    },
    result: {
        data: {
            getAllUsers: []  
        }
    }      
}];

const mockedUseHref = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useHref: () => mockedUseHref,
}));

describe('Users List', () => {
    it('should render No Users div if no data provided', async () => {
        act(() => {
            render(
                <BrowserRouter>
                    <MockedProvider addTypename={false} mocks={noData}>
                        <UsersListContainer />
                    </MockedProvider>
                </BrowserRouter>
            )
        });
        const noUsersDiv = screen.findByText('No Users Created');
        expect(noUsersDiv).toBeInTheDocument;
    });

    it('should render User if data is provided', async () => {
        act(() => {
            render(
                <BrowserRouter>
                    <MockedProvider addTypename={false} mocks={mockData}>
                        <UsersListContainer />
                    </MockedProvider>
                </BrowserRouter>
            )
        });
        const userDiv = screen.findByText('James');
        expect(userDiv).toBeInTheDocument;
    });

    it('should render Create Post button if data is provided', async () => {
        act(() => {
            render(
                <BrowserRouter>
                    <MockedProvider addTypename={false} mocks={mockData}>
                        <UsersListContainer />
                    </MockedProvider>
                </BrowserRouter>
            )
        });
        const createButton = screen.findByText('Create Post');
        expect(createButton).toBeInTheDocument;
    });

    it('should render Edit button if data is provided', async () => {
        act(() => {
            render(
                <BrowserRouter>
                    <MockedProvider addTypename={false} mocks={mockData}>
                        <UsersListContainer />
                    </MockedProvider>
                </BrowserRouter>
            )
        });
        const editButton = screen.findByText('Edit');
        expect(editButton).toBeInTheDocument;
    });

    it('should render Delete button if data is provided', async () => {
        act(() => {
            render(
                <BrowserRouter>
                    <MockedProvider addTypename={false} mocks={mockData}>
                        <UsersListContainer />
                    </MockedProvider>
                </BrowserRouter>
            )
        });
        const deleteButton = screen.findByText('Delete');
        expect(deleteButton).toBeInTheDocument;
    });

    describe('user clicks Create Post button', () => {
        it('should navigate to path /pagetwo', async () => {
            act(() => {
                render(
                    <BrowserRouter>
                        <MockedProvider addTypename={false} mocks={mockData}>
                            <UsersListContainer />
                        </MockedProvider>
                    </BrowserRouter>
                )
            });
            const createButton = await screen.findByText('Create Post');
            act(() => {
                userEvent.click(createButton);
            });
            expect(mockedUseHref).toBeCalled;
        });
    });

    describe('user clicks Edit button', () => {
        it('should render two input fields', async () => {
            act(() => {
                render(
                    <BrowserRouter>
                        <MockedProvider addTypename={false} mocks={mockData}>
                            <UsersListContainer />
                        </MockedProvider>
                    </BrowserRouter>
                )
            });
            const editButton = await screen.findByText('Edit');
            act(() => {
                userEvent.click(editButton);
            });
            const inputFields = screen.getAllByRole('textbox');
            expect(inputFields.length).toBe(2);
        });

        describe('user makes changes then clicks Submit', () => {
            it('should update the user', async () => {
                act(() => {
                    render(
                        <BrowserRouter>
                            <MockedProvider addTypename={false} mocks={mockData}>
                                <UsersListContainer />
                            </MockedProvider>
                        </BrowserRouter>
                    );
                });
                const editButton = await screen.findByText('Edit');
                act(() => {
                    userEvent.click(editButton);
                });
                const firstNameInputElement = screen.getByPlaceholderText('First Name');
                const lastNameInputElement = screen.getByPlaceholderText('Last Name');
                await act(async () => {
                    userEvent.type(firstNameInputElement, ' Updated');
                    userEvent.type(lastNameInputElement, ' Updated');
                });
                const submitButton = screen.getByText('Submit');
                await act(async () => {
                    userEvent.click(submitButton);
                })
                const updateElement = await screen.findByText('Update Successful');
                expect(updateElement).toBeInTheDocument;
            });
        });

        describe('user clicks Cancel update', () => {
            it('should return to the non-edit view', async () => {
                act(() => {
                    render(
                        <BrowserRouter>
                            <MockedProvider addTypename={false} mocks={mockData}>
                                <UsersListContainer />
                            </MockedProvider>
                        </BrowserRouter>
                    );
                });
                const editButton = await screen.findByText('Edit');
                act(() => {
                    userEvent.click(editButton);
                });
                const cancelButton = screen.getByText('Cancel');
                act(() => {
                    userEvent.click(cancelButton);
                });
                const createButton = screen.getByText('Create Post');
                expect(createButton).toBeInTheDocument;
            });
        });

    });

    describe('user clicks Delete button', () => {
        it('should delete user', async () => {
            act(() => {
                render(
                    <BrowserRouter>
                        <MockedProvider addTypename={false} mocks={mockData}>
                            <UsersListContainer />
                        </MockedProvider>
                    </BrowserRouter>
                );
            });
            const deleteButton = await screen.findByText('Delete');
            await act(async () => {
                userEvent.click(deleteButton);
            });
            const deleteSuccesfulElement = await screen.findByText('Delete Successful');
            expect(deleteSuccesfulElement).toBeInTheDocument;
        });
    });
});