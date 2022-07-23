import { MockedProvider } from '@apollo/client/testing';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostFormContainer from '../components/PostForm';
import { MUTATION_CREATE_POST } from '../components/PostForm/graphql';
import PostForm from '../components/PostForm/PostForm';
import { GetAllPostsDocument } from '../generated/graphql';

const mockCreatePost = jest.fn();

const mockedUseNavigate = jest.fn();
const mockedUseLocation = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
  useLocation: () => mockedUseLocation
}));

const mockedUseEffect = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react') as any,
    useEffect: () => mockedUseEffect
}));

describe('Post Form', () => {
    it('should render two input fields', () => {
      act(() => {
        render(<PostForm createPost={mockCreatePost} />);
      });        
      const inputElements = screen.getAllByRole('textbox');
      expect(inputElements.length).toBe(1);
    });
    
    it('should render one submit button', () => {
      act(() => {
        render(<PostForm createPost={mockCreatePost} />);
      });      
      const submitButton = screen.getByText('Submit');
      expect(submitButton).toBeInTheDocument;
    });
  
    describe('user clicks submit with input field blank', () => {
      it('should display error message', () => {
        act(() => {
          render(<PostForm createPost={mockCreatePost} />);
        });        
        const submitButton = screen.getByText('Submit');
        act(() => {
          userEvent.click(submitButton);
        });        
        const errorElement = screen.getByText('Please enter post');
        expect(errorElement).toBeInTheDocument;
      });
    });
  
    describe('user properly fills out form and clicks submit', () => {    
      it('should create a post', async () => {
        const mockData = [
          {
            request: {
              query: MUTATION_CREATE_POST,
              variables: {
                body: 'Test Post',
                authorId: ''
              }
            },
            result: {
              data: {
                createPost: {
                  __typename: 'Post',
                  _id: '123',
                  body: 'Test Post',
                  authorId: '321'
                }
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
                  body: 'Test Post',
                  authorId: '321'
                }]
              }
            }
          }
        ];
        act(() => {
          render(
            <MockedProvider addTypename={false} mocks={mockData}>
              <PostFormContainer />
            </MockedProvider>
          );
        });
        const bodyInputElement = screen.getByRole('textbox');
        const submitButton = screen.getByText('Submit');
        await act(async () => {
          userEvent.type(bodyInputElement, 'Test Post');
        });
        await act(async () => {
          userEvent.click(submitButton);
        });
        const postCreatedElement = screen.getByText('Post Created Successfully');
        expect(postCreatedElement).toBeInTheDocument;
      });
    });
  })
  
  
  