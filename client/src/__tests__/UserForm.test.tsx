import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MUTATION_CREATE_USER } from '../components/UserForm/graphql';
import UserForm from '../components/UserForm/UserForm';
import { MockedProvider } from '@apollo/client/testing';
import UserFormContainer from '../components/UserForm';
import { GetAllUsersDocument } from '../generated/graphql';

const mockCreateUser = jest.fn();

describe('User Form', () => {  
  it('should render two input fields', () => {
    act(() => {
      render(<UserForm createUser={mockCreateUser} />); 
    });     
    const inputElements = screen.getAllByRole('textbox');
    expect(inputElements.length).toBe(2);
  });
  
  it('should render one submit button', () => {
    act(() => {
      render(<UserForm createUser={mockCreateUser} />);
    });    
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument;
  });

  describe('user clicks submit with both input fields blank', () => {
    it('should display two error messages', () => {
      act(() => {
        render(<UserForm createUser={mockCreateUser} />);
      });      
      const submitButton = screen.getByText('Submit');
      act(() => {
        userEvent.click(submitButton);
      });      
      const errorElements = screen.getAllByText(/Please enter/i);
      expect(errorElements.length).toBe(2);
    });
  });

  describe('user types in firstName input field only, then clicks submit', () => {
    it('should display only lastName error message', () => {
      act(() => {
        render(<UserForm createUser={mockCreateUser} />);
      });      
      const firstNameInputElement = screen.getByPlaceholderText('First Name');
      act(() => {
        userEvent.type(firstNameInputElement, 'Sample First Name');
      });      
      const submitButton = screen.getByText('Submit');
      act(() => {
        userEvent.click(submitButton);
      });
      const errorElement = screen.getByText('Please enter last name.');
      expect(errorElement).toBeInTheDocument;
    });
  });

  describe('user types in lastName input field only, then clicks submit', () => {
    it('should display only firstName error message', () => {
      act(() => {
        render(<UserForm createUser={mockCreateUser} />);
      });      
      const lastNameInputElement = screen.getByPlaceholderText('Last Name');
      act(() => {
        userEvent.type(lastNameInputElement, 'Sample Last Name');
      });      
      const submitButton = screen.getByText('Submit');
      act(() => {
        userEvent.click(submitButton);
      });
      const errorElement = screen.getByText('Please enter first name.');
      expect(errorElement).toBeInTheDocument;
    });
  });

  describe('user properly fills out form and clicks submit', () => {
    it('should create a user', async () => {
      const mockData = [
        {
          request: {
            query: MUTATION_CREATE_USER,
            variables: {
              firstName: "James",
              lastName: "DeChavez"
            }
          },
          result: {
            data: {
              createUser : {
                __typename: "User",
                _id: '123',
                firstName: "James",
                lastName: "DeChavez",
              }     
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
                firstName: 'James',
                lastName: 'DeChavez'
              }]
            }
          }
        }
      ];
      act(() => {
        render(
          <MockedProvider addTypename={false} mocks={mockData}>
            <UserFormContainer />
          </MockedProvider>            
        );
      });
      const firstNameInputElement = screen.getByPlaceholderText('First Name');
      const lastNameInputElement = screen.getByPlaceholderText('Last Name');  
      const submitButton = screen.getByText('Submit');
      await act(async () => {
        userEvent.type(firstNameInputElement, 'James');
        userEvent.type(lastNameInputElement, 'DeChavez');
      });
      await act(async () => {
        userEvent.click(submitButton);
      });      
      const userCreatedElement = screen.findByText('User Created Successfully');
      expect(userCreatedElement).toBeInTheDocument;
    });
  });
});


