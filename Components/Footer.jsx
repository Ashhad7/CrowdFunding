import React from 'react';

const Footer = () => {
  const productList = ["Market", "ERC20 Token","Donation"]
  const contactList = [
    "support@Ashhad.com",
    "info@gmail.com",
    "Contact us",
  ];
  const usefullLink = ["Home", "About Us", "Comapny Bio"];
  return (
    <footer class="text-center text-white backgroundMain lg:text-left">
      <div class="mx-6 py-10 text-cenetr md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              ASH CRYPTO
            </h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur aspernatur ex ratione earum dolor sed maiores
              assumenda aperiam distinctio impedit?
            </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold ippercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercaese md:justify-start">
              Useful links
            </h6>
            {usefullLink.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div class="backgrounMain p-6 text-center">
        <span>©️Copyrights Reserved to Ashhad </span>
        <a class="font-semibold" href='https://tailwindelements.com/'>
           ASH CRYPTO
        </a>
      </div>
    </footer>
  );
}

export default Footer