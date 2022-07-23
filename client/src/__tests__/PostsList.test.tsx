import { render, screen, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PostsListContainer from '../components/PostsList';
import { QUERY_POST_LIST } from '../components/PostsList/graphql';
import { GetAllPostsDocument } from '../generated/graphql';
import { MUTATION_DELETE_POST, MUTATION_UPDATE_POST } from '../components/PostListItem/graphql';

const mockData = [
    {
        request: {
            query: QUERY_POST_LIST
        },
        result: {
            data: {
                getAllPosts: [{
                    __typename: 'Post',
                    _id: '123',
                    body: 'Test Post',
                    authorId: '321'
                }]
            }
        }
    },
    {
        request: {
            query: GetAllPostsDocument
        },
        result: {
            data: {
                getAllPosts: [{
                    __typename: 'Post',
                    _id: '123',
                    body: 'Test Post Updated',
                    authorId: '321'
                }]
            }
        }
    },
    {
        request: {
            query: MUTATION_UPDATE_POST,
            variables: {
                body: 'Test Post Updated',
                authorId: '321',
                updatePostId: '123'
            }
        },
        result: {
            data: {
                updatePost: {
                    __typename: 'Post',
                    _id: '123',
                    body: 'Test Post Updated',
                    authorId: '321'
                }
            }
        }
    },
    {
        request: {
            query: MUTATION_DELETE_POST,
            variables: {
                deletePostId: '123'
            }
        },
        result: {
            data: {
                deletePost: {
                    __typename: 'Post',
                    _id: '123',
                    body: 'Test Post Updated',
                    authorId: '321'
                }
            }
        }
    }
];

const noData = [{
    request: {
        query: QUERY_POST_LIST
    },
    result: {
        data: {
            getAllPosts: []
        }
    }
}];

describe('Posts List', () => {
    it('should render No Posts div if no data provided', async () => {
        act(() => {
            render(
                <BrowserRouter>
                    <MockedProvider addTypename={false} mocks={noData}>
                        <PostsListContainer />
                    </MockedProvider>
                </BrowserRouter>
            )
        });
        const noPostsDiv = screen.findByText('No posts created');
        expect(noPostsDiv).toBeInTheDocument;
    });

    it('should render Post if data is provided', async () => {
        act(() => {
            render(
                <BrowserRouter>
                    <MockedProvider addTypename={false} mocks={mockData}>
                        <PostsListContainer />
                    </MockedProvider>
                </BrowserRouter>
            )
        });
        const postDiv = screen.findByText('Test Post');
        expect(postDiv).toBeInTheDocument;
    });

    it('should render Edit button if data is provided', async () => {
        act(() => {
            render(
                <BrowserRouter>
                    <MockedProvider addTypename={false} mocks={mockData}>
                        <PostsListContainer />
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
                        <PostsListContainer />
                    </MockedProvider>
                </BrowserRouter>
            )
        });
        const deleteButton = screen.findByText('Delete');
        expect(deleteButton).toBeInTheDocument;
    });

    describe('user clicks Edit button', () => {
        it('should render two input fields', async () => {
            act(() => {
                render(
                    <BrowserRouter>
                        <MockedProvider addTypename={false} mocks={mockData}>
                            <PostsListContainer />
                        </MockedProvider>
                    </BrowserRouter>
                )
            });
            const editButton = await screen.findByText('Edit');
            act(() => {
                userEvent.click(editButton);
            });
            const inputFields = screen.getAllByRole('textbox');
            expect(inputFields.length).toBe(1);
        });

        describe('user makes changes then clicks Submit', () => {
            it('should update the post', async () => {
                act(() => {
                    render(
                        <BrowserRouter>
                            <MockedProvider addTypename={false} mocks={mockData}>
                                <PostsListContainer />
                            </MockedProvider>
                        </BrowserRouter>
                    )
                });
                const editButton = await screen.findByText('Edit');
                act(() => {
                    userEvent.click(editButton);
                });
                const inputField = screen.getByRole('textbox');
                await act(async () => {
                    userEvent.type(inputField, ' Updated');
                });
                const submitButton = screen.getByText('Submit');
                await act(async () => {
                    userEvent.click(submitButton);
                });
                const updateElement = await screen.findByText('Update Successful')
                expect(updateElement).toBeInTheDocument;
            });
        });

        describe('user clicks Cancel update', () => {
            it('should return to the non-edit view', async () => {
                act(() => {
                    render(
                        <BrowserRouter>
                            <MockedProvider addTypename={false} mocks={mockData}>
                                <PostsListContainer />
                            </MockedProvider>
                        </BrowserRouter>
                    )
                });
                const editButton = await screen.findByText('Edit');
                act(() => {
                    userEvent.click(editButton);
                });
                const cancelButton = screen.getByText('Cancel');
                await act(async () => {
                    userEvent.click(cancelButton);
                });
                const deleteButton = screen.getByText('Delete')
                expect(deleteButton).toBeInTheDocument;
            });
        });        
    });

    describe('user clicks Delete button', () => {
        it('should delete post', async () => {
            act(() => {
                render(
                    <BrowserRouter>
                        <MockedProvider addTypename={false} mocks={mockData}>
                            <PostsListContainer />
                        </MockedProvider>
                    </BrowserRouter>
                )
            });
            const deleteButton = await screen.findByText('Delete');
            act(() => {
                userEvent.click(deleteButton);
            });
            const deleteSuccessfulElement = await screen.findByText('Delete Successful');
            expect(deleteSuccessfulElement).toBeInTheDocument;
        });
    });   
});