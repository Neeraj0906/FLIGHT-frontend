# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Technologies used :-
MongoDB
Express.js
React.js
Node.js
Tailwind CSS for styling
Payment gateway used is stripe, i used stripe API for payment.
Airline APIs for real-time updates is Amadeus API

Procedure to use:-

Things to note :- the website might me slow some times , so you might get responses little late , so you can also refresh ad try few times , if you get any error, now you can follow the steps below.

step-1: as soon as you open the vercel link that i have provided .

step-2: if you haven't Registered yet, Register first and use the same credentials to login .

step-3: Once you login you can see the website .

step-4: yu can see the navbar in the website 
                        "Home" -> is for default website page.
                        "Dashboard"->you can see all your Flight Booking details.
                        "Logout"-> you will be loged out and will ask you to login again.
                        "Tours"->its a basic web page for advertisement.
step-5: in the "Home" page if you scroll down you will see "SearchFlights" Form fill the form 
                        for example if you want to travel from sydne to bangkok 
                        fill "SYD" (IATA code)
                        fill "BKK" (IATA code)
                        DEPARTURE -> future date 
                        click on the search flights button.

step-6: now you will be able to see the available flights down  and you can book any flight of your choice by   clicking on the "Book Flight" button.

step-7:after that scroll down till you see teh last flight option , you can see the confirm booking option after the last flight option.

step-8:click on the "Confirm Booking" it will take you to the payment page where you can also see the Booking       Details and the payment option.

step-9:fill the payment information like 
            card number:4242 4242 4242 4242 (because its a trial Api)
            MM/YY ->02/26(ANY FUTURE DATE)
            cvc->123(Any number of your choice)
            ZIP->12345(Any number of your choice)

setp-10: after this you will get an alert in the website and also you can see it in teh console.


