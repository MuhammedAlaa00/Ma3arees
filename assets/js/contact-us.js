document.write(`
<section class="main_form send_us_form sectionPadding" id="contact">
      <div class="container">
        <h2 class="pb-3 lang" key="send_us">contact us</h2>
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" class="form-control" id="Name" placeholder="first name">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="Email" placeholder="Enter email">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" class="form-control" id="LastName" placeholder="last name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="Phone" placeholder="phone">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-group">
                <textarea class="form-control" id="Message" placeholder="message"></textarea>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="text-center">
                <button class="btn lang" type="submit" key="send_message">send message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
`);