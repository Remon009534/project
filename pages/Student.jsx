import App from '../App'
import { useState } from 'react';

function Student()
{
    return (
        <section className='sign-in'>
            <div className='container'>
                <div id='sign'>
                    <div id='link'>
                        <li><a href='#'>Student</a></li>
                        <li><a href='#'>Tutor</a></li>
                    </div>
                    <form>
                        <label>
                            Name:-
                            <input type='text' id='name' name='name' required></input>
                        </label>
                        <label>
                            Email:-
                            <input type='email' id='email' name='email' required></input>
                        </label>
                        <label>
                            Password:-
                            <input type='password' id='password' name='password' required></input>
                        </label>
                        <div id='button'>
                            <button type='submit' id='btn'>Create Account</button>
                            <button id='btn2'>Login</button>
                        </div>
                    </form>
                </div>
                <div id='image'></div>
            </div>
        </section>
    );
}

export default Student;