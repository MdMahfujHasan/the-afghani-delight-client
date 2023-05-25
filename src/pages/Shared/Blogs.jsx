import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Blogs = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='container mx-auto mt-8'>
                <h4 className='text-4xl mb-4 font-thin text-sky-500'>#1 What are the differences between uncontrolled and controlled components?</h4>
                <p>
                    <span className='text-xl'>1. User Input Handling:</span>
                    <li>Uncontrolled Components: In React, an uncontrolled component manages its own state internally using the DOM. It typically uses a ref to access the DOM node and obtain the user input value when needed. The component doesn't have direct control over the input value and doesn't update it through state changes or React events.</li>
                    <li>Controlled Components: In contrast, a controlled component is one where the component's state is controlled by React. The component receives its current value as a prop and notifies changes to a callback function provided by the parent component. Any updates to the input value are done through state changes, making React the source of truth for the input's state.</li>
                    <span className='text-xl'>2. State Management:</span>
                    <li>Uncontrolled Components: Since uncontrolled components manage their own state internally, they don't rely on React's state management. This approach is useful for simple forms or scenarios where you don't need to perform complex validations or handle input changes in real-time.</li>
                    <li>Controlled Components: Controlled components rely on React's state management. The current value of the input is stored in the component's state, and any changes are handled through state updates. This enables React to have full control over the component's state, allowing for more complex logic, validation, and real-time updates.</li>
                    <span className='text-xl'>3. Accessing Input Value:</span>
                    <li>Uncontrolled Components: In uncontrolled components, you typically access the input value using a ref to the DOM node. This approach can be useful when you need to extract the input value at a specific point, such as when submitting a form.</li>
                    <li>Controlled Components: In controlled components, the input value is always available through the component's state. You can access it directly from the state or use event handlers to update it as needed.</li>
                    <span className='text-xl'>4. Event Handling:</span>
                    <li>Uncontrolled Components: Since uncontrolled components don't rely on React's state management, they handle events through traditional DOM event listeners. You can attach event handlers directly to the DOM node using attributes like onChange or onSubmit.</li>
                    <li>Controlled Components: Controlled components handle events by defining event handlers within the component and updating the state accordingly. React provides synthetic events (e.g., onChange) that abstract browser-specific event handling and ensure consistency across different platforms.</li>
                </p>
                <br />
                <h4 className='text-4xl mb-4 font-thin text-sky-500'>#2 How to validate React props using PropTypes?</h4>
                <p><span className='text-xl'>1. Install PropTypes:</span> PropTypes is a separate package that is used for prop type validation. To use it, you need to install it as a dependency in your React project. You can install it using npm or yarn by running one of the following commands:</p>
                <br />
                <code className='bg-black p-2 rounded'>npm install prop-types</code>
                <br />
                <br />
                <code className='bg-black p-2 rounded'>yarn add prop-types</code>
                <br />
                <br />
                <p ><span className='text-xl'>2. Import PropTypes:</span> In your component file, import PropTypes from the prop-types package:</p>
                <br />
                <code className='bg-black p-2 rounded'>
                    <span className='text-sky-500'>import</span>
                    <span className='text-rose-500'> PropTypes</span>
                    <span className='text-sky-500'> from</span>
                    <span className='text-green-500'> 'prop-types';</span>
                </code>
                <br />
                <br />
                <p><span className='text-xl'>3. Define PropTypes:</span> Below your component definition or as a static property within your component, define the prop types for your component using the PropTypes API. You can define the expected type, whether it's required, default values, and more.</p>
                <br />
                <p><span className='text-xl'>4. PropTypes API:</span> PropTypes provides various validators to specify the expected prop types. Some commonly used ones include:</p>
                <li><b>`PropTypes.array`:</b> Validates an array.</li>
                <li><b>`PropTypes.bool`</b>: Validates a boolean value.</li>
                <li><b>`PropTypes.func`</b>: Validates a function.</li>
                <li><b>`PropTypes.number`</b>: Validates a number.</li>
                <li><b>`PropTypes.object`</b>: Validates an object.</li>
                <li><b>`PropTypes.string`</b>: Validates a string.</li>
                <li><b>`PropTypes.node`</b>: Validates any renderable content (string, element, etc.).</li>
                <li><b>`PropTypes.element`</b>: Validates a React element.</li>
                <li><b>`PropTypes.instanceOf(ClassName)`</b>: Validates an instance of a specific class.</li>
                <li><b>`PropTypes.oneOf([value1, value2])`</b>: Validates that the prop matches one of the specified values.</li>
                <li><b>`PropTypes.oneOfType([type1, type2])`</b>: Validates that the prop matches at least one of the specified types.</li>
                <li><b>`PropTypes.arrayOf(type)`</b>: Validates that the prop is an array of the specified type.</li>
                <h4 className='text-4xl my-4 font-thin text-sky-500'>#3 What are differences between NodeJs and ExpressJs?</h4>
                <div className="overflow-x-auto">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>NodeJs</th>
                                <th>ExpressJs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</td>
                                <td>Express.js is a web application framework for Node.js.</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>It allows developers to execute JavaScript code on the server-side, outside of the browser environment.</td>
                                <td>It provides a simple and minimalistic set of features for building web applications and APIs.</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Node.js provides an event-driven, non-blocking I/O model, making it highly scalable and efficient for handling concurrent requests.</td>
                                <td>Express.js is built on top of Node.js, utilizing its features and providing additional abstractions to simplify web development.</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>It provides a vast ecosystem of libraries and modules through npm (Node Package Manager), allowing developers to leverage a wide range of functionalities.</td>
                                <td>It provides routing capabilities, middleware support, and templating engines, making it easier to handle HTTP requests, define routes, and render dynamic content.</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Node.js can be used to build various types of applications, including web servers, real-time applications, command-line tools, APIs, and more.</td>
                                <td>Express.js is highly flexible and can be extended using various middleware and plugins available in the Express ecosystem.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className='text-4xl my-4 font-thin text-sky-500'>#4 What is a custom hook? Why should you create a custom hook?</h4>
                    <p>A custom hook is a JavaScript function in React that allows you to reuse stateful logic across multiple components. Custom hooks are a way to extract and encapsulate common functionality so that it can be easily shared and reused in different parts of your application. There are several reasons why you might want to create a custom hook:</p>
                    <li>Reusability: If you find yourself using the same code or implementing similar logic in multiple components, creating a custom hook can help you extract that logic into a reusable function. This promotes code reuse and reduces duplication, making your codebase more maintainable.</li>
                    <li>Abstraction: Custom hooks provide a way to abstract complex or repetitive logic into a single function. This improves code readability and makes it easier to understand the purpose and behavior of a component without having to dive into the implementation details.</li>
                    <li>Separation of Concerns: Custom hooks enable you to separate concerns and keep your components focused on their core responsibilities. By extracting specific functionality into a custom hook, you can ensure that each component is responsible for its own concerns and relies on reusable hooks for shared functionality.</li>
                    <li>Testing: Custom hooks can make testing easier and more straightforward. Since hooks are independent functions, you can write unit tests for them separately, ensuring that the logic behaves as expected. This modular approach simplifies the testing process and promotes testability.</li>
                    <li>Stateful Logic: Custom hooks can encapsulate stateful logic and provide a clean and consistent interface for managing and accessing that state. They can handle side effects, manage subscriptions, perform API calls, or any other state-related operations. By creating custom hooks for specific stateful logic, you can promote encapsulation and modularize your code.</li>
                    <br />
                    <p>To create a custom hook, you simply write a function that uses built-in React hooks (such as useState, useEffect, useContext, etc.) or other custom hooks. Custom hooks should follow the naming convention of starting with the word "use" (e.g., "useCustomHook"). By adhering to this convention, React knows that it's a hook and allows you to use it within functional components.</p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blogs;