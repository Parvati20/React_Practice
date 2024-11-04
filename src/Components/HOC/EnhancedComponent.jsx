// Higher-Order Components (HOCs) are functions that take a component as an argument and return a new component with additional props or behavior.
// Why Use HOCs?


// 1. Reuse Code: HOCs help you reuse code across multiple components.


// 1. Simplify Complex Logic: Break down complex logic into smaller, manageable pieces.


// 1. Separate Presentation and Logic: Keep UI and business logic separate for easier maintenance.


// 1. Easier Testing: Test logic independently of components.


// 1. Improve Code Organization: Keep related functionality grouped together.

// Key Benefits of HOCs:


// 1. Reuse Code: Share logic across multiple components.


// 1. Simplify Complex Logic: Break down complex code into smaller pieces.


// 1. Easy Maintenance: Update logic in one place, affects all components.


// 1. Improve Testing: Test logic independently of components.


// 1. Better Organization: Keep related functionality grouped together.


// Or, if you'd like it even simpler:


// 5 Reasons to Use HOCs:


// 1. Save Time
// 2. Reduce Errors
// 3. Simplify Code
// 4. Easy Updates
// 5. Organized Code



import React from "react";

// HOC => Higher Order Components
const withMessage = (WrappedComponent, message) => {
  return (props) => {
    return (
      <>
        <h1>Hello Shivansh</h1>
        <WrappedComponent message={message} {...props} />
      </>
    );
  };
};

// Base Component
const WrappedComponent = (props) => {
  return <div>{props.message}</div>;
};

// Enhanced Component
const EnhancedComponent = withMessage(WrappedComponent, "Hello Shivansh");

export default EnhancedComponent;




