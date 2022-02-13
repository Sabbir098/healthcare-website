import React from 'react';
import { Button } from 'react-bootstrap';


const Register = () => {

    return (
        <div className='login-container'>
             <h2 className="text-primary">Please Register </h2>
      <form>
        <input  className="input-fi" type="email" name="email" id="" placeholder="Enter email" />
        <br /> <br />
        <input className="input-fi" type="password" name="password" id="" placeholder="Enter password" />
      </form> <br />
        <Button variant="primary" type="submit">
          Register
        </Button> <br /> <br /> <br />
        <Button variant='danger'>Go back</Button>
        </div>
    );
};

export default Register;