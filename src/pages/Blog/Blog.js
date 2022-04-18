import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogs'>
            <div className='blog-summary'>
                <h1>Difference Authentication And Authorization</h1>
                <p align="justify">
                Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. Usernames and passwords are the most common authentication factors. If a user puts the correct data, the system access the user

                Authorization in system security is the process which is given the user permission to access a specific resource.

                </p>
            </div>
            <div  className='blog-summary'>
                <h1>What is Symentic Tag?</h1>
                <p align="justify">Firebase is a Backend-as-a-Service (BaaS),which is a platform by Google that provides functionalities and helps with the backend development of  Android, iOS, or web and support Unity3D too.Firebase Database,Firebase Cloud Storage,Firebase Cloud Messaging,Firebase Remote Config are the best feature.
                The best part is that Firebase has all the features that helped my apps to grow to the next level.
                
                Multi-factor authentication, Certificate-based authentication,Biometric authentication,Facial recognition,Fingerprint scanners,Speaker Recognition etc.
                </p>
            </div>
        </div>
    );
};

export default Blog;