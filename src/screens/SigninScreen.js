const SigninScreen = {
     after_render: () => {},
     render: () => {
          return `
          <div class="form-container">
           <form id="signin-form">
               <ul class="form-items">
                    <li>
                         <h1>Sign-In</h1>
                    </li>
                    <li>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" />
                    </li>
                    <li>
                         <label for="password">Password</label>
                         <input type="password" name="password" id="password" />
                    </li>
                    <li>
                         <buttton type="submit" class="primary">Signin</buttton>
                    </li>
                    <li>
                         <div>
                              New user?
                              <a hef="/#/register">Create your account </a>
                         </div>
                    </li>
               </ul>
           </form>
          </div>
          `;
     }
};

export default SigninScreen