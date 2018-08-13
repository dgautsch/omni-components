customElements.define(
    'login-form',
    class extends HTMLElement {
      get template() {
        return `
        <link rel="stylesheet" href="./components/login-form/login-form.css">
        <form>
            <fieldset>
                <legend>Login Form</legend>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Submit</button>
            </fieldset>
            <a-button></a-button>
        </form>
        `;
      }
  
      constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = this.template;
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));
      }
    }
  );
  