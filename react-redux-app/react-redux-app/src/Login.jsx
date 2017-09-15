import React from 'react';
import ReactDOM from 'react-dom';

export const Login = () => {
    let element = (
        <div className="container">
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">Login</div>
                    <div className="panel-body">
            
                        <form role="form">
            
                            <div className="row">
                                <div className="form-group col-xs-12">
                                    <label for="username"><span className="text-danger">*</span>Username:</label>
                                    <div className="input-group">
                                        <input className="form-control" id="username" type="text" name="username" placeholder="Username" required />
                                        <span className="input-group-btn">
                                            <label className="btn btn-primary" ><span className="glyphicon glyphicon-user" aria-hidden="true"/></label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                
                            <div className="row">
                                <div className="form-group col-xs-12">
                                    <label for="password"><span className="text-danger">*</span>Password:</label>
                                    <div className="input-group">
                                        <input className="form-control" id="password" type="password" name="password" placeholder="Password" required />
                                        <span className="input-group-btn">
                                            <label className="btn btn-primary" ><span className="glyphicon glyphicon-lock" aria-hidden="true"/></label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                
                            <div className="row">
                                <div className="form-group col-xs-4">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </div>
                
                        </form>
            
                    </div>
                </div>
            </div>
        </div>
    );
    return element;
}

