# MERN-Full-Stack-Ecom-WebApp

## Visit-Link - https://dailycart.cyclic.app

## Tech-Stacks Used

  1] JavaScript as a Scripting Language.

  2] Bootstrap for implementing some basic designs.

  3] CSS for giving extra styles.

  4] NodeJs For backend technology.

  5] ReactJs For front-end technology

  6] MongoDB for Database Managegement.

  7] ExpressJs For creating Server

  8] Many npms for node and reacts 

## Locals Set-Up 

step 1:- create-react-app client.

step 2:- remove the all codes from app.css, index.css, app.js [excepts component].

step 3:- write a h1 tag inside the app component.

step 4:- Now addinc bootstrap into index.html file of public.

atep 5:- Also adding google fonts [poppins-300 and, playfairs-700].


                                ************ END *****************
## Sources

  1] Inspired by Flipcart, Mesho, Amazon

  2] Searching from google while stuck to implement any functionalitie mostaly -- Stack Over Flow and GitHub.

## Overvies

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/a7d8118e-fb0d-41ba-9150-6f3b10a26a0f)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/661b801f-156c-4111-8d72-924e6a3db4f0)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/4b733df6-de93-4c8d-b9fb-9eb346cffb2c)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/38b8f91b-6f2b-4c8d-bb77-afa09165873f)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/95189de2-9be9-4a4f-aae3-a00fa082d0f9)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/57c73ade-5310-400b-964a-076c5c81a53f)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/d3904d5a-b111-4bb7-b17d-99b58338e0be)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/79d758ae-1440-491b-bf8b-68d5e110475d)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/8a916036-f72f-436b-be1d-3b0c6842f7b6)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/3a80ebfa-a3e1-436f-a3a8-5783b0b504ca)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/4325db7c-5f13-49af-ac8d-0de6a574ccbb)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/a0d67a95-e34d-43ae-94b6-c3c6b3107399)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/1693ebf1-1c87-430b-bec3-868651ef8396)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/5fa7e649-ecbe-448e-aac3-d248bfac8556)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/8ffd8266-5104-414e-9bd6-eb0bad2bd070)

![image](https://github.com/vaidyahimanshu502/MERN_eCom_WebApp/assets/76218691/50093b31-5b4b-4438-8a61-f58ca42dd8d2)


## Creating Our Layout 


step 6:- creating component folder inside the src and inside the components created theree files

        1]- Layout.js [make it functional components]--rfce{shortcut}
        
        2]- Header.js
        
        3]- Footer.js        
        
step 7:- Now wrapping our app component into the Layout component and in Layout component pass props and for
        rendering the child of Layout components written --- {props.children}.
        
step 8:- Adding Header and Footer components to the Layout component.

step 9:- Giving the min Height = 80vh to the main tag for  shifting footer bellow.

step 9:- Giving the className of footer and giving some bootstrap styles. [class= bg-dark text-light p-3]

step 10:- Giving the class = text-center to the h1 of footer and write 'All Right Reserved &copy; Techinfoyt'.


                             ****************** END **********************
## Routing 
![image](https://github.com/vaidyahimanshu502/MERN-Full-Stack-Ecom-WebApp/assets/76218691/525c2fb8-5496-4b97-8d27-fc0f280556a2)



## Routing Features


step 11:- For routing we are going to use 'react-router-dom' framework , installing it by passing command 'npm i react-router-dom'.

step 12:- changing the title of our app to Ecommerce app.

step 13:- In index.js importing {BrowserRouter} from "react-router-dom" and wrapp the React Strict mode inside the
          <BrowserRouter> tag.
          
step 14:- Creating a HomePage component and make it functional component and wrap it with <Layout>.

step 15:- Creating a About page and also wrap it with <Layout>.

step 16:- Creating Contact functional component and also wrap it with <Layout>.

step 17:- Creating Policy functional component and wrap it with <Layout>.

step 18:- Creating PageNotFound functional component and also wrap it with <Layout>.

step 19:- Removing everything from App.js and also removes the previous imports and import {Routes, Route} from
         'react-router-dom' and start the process of making routes, first wrap the all Route with <Routes> and::--
         
         a]<Route path='/' element = {<HomePage />} /> and importing HomePage at the top.
         
         b]<Route path='/about' element = {<About />} /> and import the About at the top.
         
         c]<Route path='/contact' element = {<Contact />} /> and import the Contact at the top.\
         
         d]<Route path='/policy' element = {<Policy />} /> and import the Policy at the top.
         
         e]<Route path='*' element = {<PageNotFound />} /> and import the PageNotFound at the top.
         
NOTE--- '*' Means when none of above pages meets then navigates to PageNotFound functional components.


                                 ************** END *****************


## Working On NavBar Section


step 20:- Going to bootstrap click on 'docs' and search 'navbar' in searchbar and select responsive behaviour from
          right side and copy the toggle bavbar and paste it in Header component by removing everything from Header
          and make it jsx and removes the form and button.
          
            ---->Importing <NavLink> from 'react-router-dom' and replace all anchor tags with <NavLink>.
            
            ---->Adding to = '/', '/about', '/contact' etc inside the anchor tag.
            
            ----> we are just putting Home, SignUp, Login and, Cart links into the navBar.
            
            ----> shifting all links to the right by replacing class me-auto to ms-auto.
            
            ----> Adding some css to navbar.
            
            ----> Just leave Home Button active remove active class from rest of the links.
            
            ----> Just remove href from every Links.
            
            ----> Changing our Brand Name with NavLink To Link And import it at top.
            
            ----> For changing Icon we are going to install npm i react-icons;
            
            ----> Go to react icons and search for shoping-cart and copy it ans import it as I impoted and 
                  also paste the name of icon where you want to show icons. For now pasted before BrandName.



                                *************** END ********************



## Working on Footer Component 

step 21:- Now going to Mordify our Footer components.....

        a] In Footer creating a p.text-center.mt-3 element by bbotstrap
        
        b] Inside paragraph created three links ---About, Contact and, Privacy Policy and importing the Link from
           react-router-dom.
           
        c] Removes the bootstrap classes from div and just adds 'footer' class and targeted it in index.css



                                   ************* END ********************


## Working on PageNotFound Component   

step 22:- Creating Page Not Fount page----

        a] Just creating normal content and gives simple styles in css




                              **************** END *****************


## Working on Contact Component    

step 23:- Now going to design our Contact component-----

        a] Importing BiMailSend, BiPhoneCall, BiSupport from react-icons.
        
        b] now I have created parent div and inside this created two divs and uses col-md-6 class of bootstrap
           to devide it into two equals parts of screen.
           
        c] First part contains only a image and giving and in react we have to make images folder inside the 
           public folder bcz everything in react renders in a single html page and that is index.html of public
           folder.
           
        d] Second part of the page contains contact-details and given col-md-4 class of bootstrap and inside this
           part it contains h1 with bg-dark p-2 text-white text-center classes of bootstrap and 2 paragraphs with
           text-justify mt-2 classes of bootstrap and 3 paragraphs with contactdetails with mt-3 classes and related 
           react-icons.


                              **************** END ************************



## Working On About Component        

step 24:- Now going to modify About Component------

        a] giving the same design to About Component also with some minor changes in classes



                            *************** END ********************



## Worling On Privacy Policy Component

step 25:- Now going to design our Privacy-Policy Components-------

        a] I have just used a single div col-md-8 class of bootstrap
        
        b] I have created a ul inside it i have created h5 and some p and rests are li tags.



                       ***************** END **********************



## Little bit Working on SEO 

step 26:- Working on SEO [Search Engine Optimisation.]

        a] Searching Keywods for the SEO in google
        
        b] Install 'react-helmet' frameworks from npm --This helps us to set SEO in our react application. Bydefault 
           it does not provide SEO.
           
        c] Since we are wrapped our all pages into <Layout> so, we are making our setup of 'react-helmet' inside the
           Layout Component. 
           
        d] We are copy our code from npm react-helmet and paste it in Laout after importing. Initialy it is Static we
           have to make it dynamic.
           
        e] To make dynamic we are passing [ title, description, keywords, author ] these in props and make our 
           dynamic by destructuring them into JSX. [please see the code for more info]
           
        f] Now I have implemented title = {'About us - Ecom WebApp'} into our About component, inside <layout> tag.
           and also set same for all pages by changing content.
           
        g] Now going to set default SEO in Layout componrnt Bellow everything .
        
        h] For better SEO experience pass all [ title, description, keywords, author ] inside the Layout of
           every pages.
           
        i] For now we are just setting 'title' inside <Laout> Tag and rest sets default.




                           **************** END ********************


## Working on Sign-Up Component

step 27:- Now we are going to design our Sign-Up Page. first create two Components inside the users folder of pages.

        a] Created SignUp and LogIn Components and make them functional component and then wrapped them inside the 
           Layout Component. and also gives them dynamic titles.
           
        b] In App.js We are going to create the routes for them---- see App.js for more info. 
        
        c] Now going to create useState hook of react in Register Component for this we have to first import the
           use hook from react.
           
        d] creating state for eact field like const [name, setName] = useState(');
        
        e] Now passing value = {name} etc attribute to each form input we binded our input now.
        
        f] Now we are passing onChange method as an attribute to each input like---
           onChange={(e)=> setName(e.target.value)} to change the stae of input. for all inpits.
           
        g] Adding required attribute to set validations from client side.
        
        h] Now going to create custom function onSubmit for submit the data by this we have just remove the default 
           behaviour of form submission.
           
        i] Now for communicating with server we are going to use 'axios' framework, so first we need to install it
           from npm .
           
        j] For showing notifications we are going to use 'react-toastify' framework, so first we need to install it
           from npm.
           
        k] importing this into App component or in Layout component and passing the container as done in Layout
           Component.
           
        l] Importing toast into Register Component and in our custom method use it like
                    toast.success('Register Successfully!) --- just for testing purpose.



                             *************** END ******************


## Working On APIs From BackEnd 

step 28:- Now going to use axios for sending or getiing network request to the server---

        a] Creating a .env file in root folder and making a variable API = http://localhost:8080
        
   NOTE---It is mandatory to write variable name like - 'REACT_APP_API' in react. It is also mandatory to restart 
          the server of react at every changes in .env file.
          
        b] To run simultaneously backend and front-end on same system we need to install a npm 'concurrently' on the
           server of nodejs and also install 'cors'.

           NOTE--> Going to run both backend + Front-end simultaniously:)
           
                  1] Go to the documentation of npm-concurrently and copy the run command and paste it into the
                     package.json of nodejs like this---

                     "scripts": {
                     
                           "start": "node server.js",
                           
                           "server": "nodemon server.js",
                           
                           "client": "npm start --prefix ./client",
                           
                           "dev": "concurrently \"npm run server\" \"npm run client\""
                           
                         },
                         
                  2] Now in cmd just pass command --- npm run dev [Start the app simultaniously.] ::::)
                  
step 29:- Now our basic setup is ready to work on APIs---->

        a] First remove the confirm passwod field from the register API of backend. and also replace
           error with message.
           
        b] Also remove strict mode from the index.js of client to remove console warnig.
        
        c] with the help of axios we have modified our custum method  see the method of Sign_up Component
           for more info 
           
        d] I didn't see any notifications while sign-up thats why going to use another npm for notifications
           name:- 'react-hot toast'
           
step 31:- Same things has been achived for login Component also we have to just change something minor as
          Route and navigate etc.



                                ****************** END **********************


## Working On Context APIs 


step 32:- Now we are going to use CONTEXT APIs Instead of Redux for managing GLOBAL STATEs----->

        a] Create a new folder 'context' inside src and inside context create a new file auth.js
        
        b] Importing {useState, useEffect, useContext, createContext} hooks from react.
        
        c] By using createContext I have created a context first -- const AuthContext = createContext();
           after that created a auth-provider for varifying the authentication of user---
           
           --- const AuthProvider = ({children}) => {
           
                  const [auth, setAuth] = useState({
                  
                     user: null,
                     
                     token: ""
                     
                  })
                  
                  return (
                  
                     <AuthContext.Provider>

                           {children}
                           
                     </AuthContext.Provider>
                     
                  )
                  
               }
               
            after that creating a custom hook to use this context--- const useAuth = () => useContext(AuthContext);
            now exporting our context and passing the value of auth in provider like--
            
            <AuthContext.Provider value={[auth, setAuth]}>.
            
         d] For using this importing it into the index.js file and wrap the BrowserRouter with it see for more info.
         
         e] Now for testing we are importing useAuth into the Home Component and creating a variable----
         
            const [auth, setAuth] = useAuth(); and passing it into the pre tag as shown...
            
            pre>{JSON.stringify(auth, null, 4)}</pre>.
            
         f] Now for use this context we are importing useAuth inside the Login Component and creating a variable
            const [auth, setAuth] = useAuth();
            
         g] Before navigate it to home page we have to set the authentication by using setAuth--
         
            --- setAuth({
            
                  ...auth,
                  
                  user: res.data.user,
                  
                  token: res.data.token,
                  
               });  inside the axios method.
               
         h] Since it is temporary so we have to store it inside the Local-Storage of the browser by using 
            localStorage method provided by the react like-----
            
               localStorage.setItem('auth', JSON.stringify(res.data)); -- this will just storing our data inside the 
            localStorage to permanantaly use it we to use the 'useEffect' hook. for this go to auth.js and go to the
            AuthProvider method and before rendering use the useEffect hook like this----
            
             useEffect(() => {
             
                  const data = localStorage.getItem("auth");
                  
                  if (data) {
                  
                     const parsedData = JSON.parse(data);
                     
                     setAuth({
                     
                     ...auth,
                     
                     user: parsedData.user,
                     
                     token: parsedData.token,
                     
                     });
                     
                  }
                  
               }, []);
               
          i]  To set buttons view uses turnary operator -- if user logged-in only show LogOut button and if not show 
              Resister and Sign-Up buttons------- for this in Header Component--- adding
              
               {!auth.user ? (
               
                <>
                
                  <li className="nav-item">
                  
                    <NavLink to="/register" className="nav-link">
                    
                      SignUp
                      
                    </NavLink>
                    
                  </li>
                  
                  <li className="nav-item">
                  
                    <NavLink to="/login" className="nav-link">
                    
                      LogIn
                      
                    </NavLink>
                    
                  </li>
                  
                </>
                
              ) : (
              
                <>
                
                  <li className="nav-item">
                  
                    <NavLink to="/logout" className="nav-link">
                    
                      LogOut
                      
                    </NavLink>
                    
                  </li>
                  
                </>
                
              )}
              
          j] For adding functionality of LogOut we have to pass a onClick method in logOut NavLink like this--
          
              <li className="nav-item">
              
                    <NavLink
                    
                      onClick={handleLogOut}
                      
                      to="/login"
                      
                      className="nav-link"
                      
                    >
                    
                      LogOut
                      
                    </NavLink>
                    
                  </li>
                  
               And creating a method above to LogOut the user Like -----
               
                const handleLogOut = () => {
                
                        setAuth({
                        
                           ...auth,
                           
                           user: null,
                           
                           token: "",
                           
                        });
                        
                        localStorage.removeItem("auth");
                        
                     };



                           ***************** END ********************



## Working On Protected Routes

   step 33:- Now Going to create Protected Routes for our Application------
   
           a] Creating a new folder 'users' inside the pages and inside the users created a page 'Dashboard' Compo-
              nent with rafce- [React-Arrow-Function-With_Export]; and passing the title. and also wrap it with 
              Layout Component. Also Created its route in App.js.
              
           b] Now going to create backend first--- For this creating a auth-route for dashboard. and make it 
              Protected by appplying authentication.
              
           c] In components created a new folder 'routes' and inside this folder created a file Private.js
           
              1)- To perform the functionality of protected routes we have to first import useState, useEffect hooks 
                  and also imports useAuth and make a function PrivateRoutes.
                  
              2)- Inside this I have created variabled for hooks and also create a useEffect method.
              
              3)- To performing functionality of nested Routes we have to also import {Outlet} from 'react-router- 
                  dom' 
                  
              4) - We have created functionality for more info go and see Private.js file .
              
              5)- For setting globaly Headers we have added global default method of axios like-----
              
                  ------ axios.defaults.headers.common['Authorization'] = auth?.token; inside the Auth.js and removes
                  headers from Private.js.
                  
              6)- For adding Spinner bring it from Bootstrap and make a component Spinner.js Inside the components 
                  and import it in Private.js to check conditions.
                  
              7)- Now working on Spinner Component Please go and see we have imported useState, useEffect hooks and 
                  also importing the useNavigate from 'react-router-dom' to redirect after finishing the spiiming 
                  time, to achieve this we have just using useEffect hook and setInterval method.
                  
              8]- Now here is problem in my app if a user logged in then he will redirect to home page but this is 
                  not about good user experience, we should redirect the user to desired page---- To acieve this we 
                  have to do the 
                  
                  following steps----->
                  
                       
                       1) Go to in Spinner Component import 'useLocation' from react-router-dom' and make a variable
                          const location = useLocation();
                          
                       2) After 'login' path pass a object { state: location.pathName} and also pass the location 
                          inside the dependency and save it.
                          
                       3) In LogIn Component import useLocation here also and also make a variable here with location
                          name and where we redirect user after login pass a condition. see LogIn Component for more 
                          info.
                          
                       4) Bydefault it redirect the user to home page after logIn.
                       

                                ***************** End **************************

## Working On ForGet Password

  step 34:- Working on forgot-Password------------>
  
           a] Go to the schema and add an extra field 'question' and in routes create a route for forgot Passwod.
           
           b] Make a controller to forgot-password and call it in routes. and also add question in Register cont-
              -roller.
              
           c] Go to in SignUp Component and create an extra state for question initialy it also be empty and pass it 
              into the useEffect see the component for more info and also add an extra field to the form for taking
              answer from the user.
              
           d] In LogIn create an extra button for Forgot-Password. and pass an event onClick={() => {
           
                  navigate('/forgot-password')
                  
               }}
               
           e] Inside pages->auth-> Create a new page ForgotPassword Component and make it rafce. and wrap it with
              <Layout> and create a route for this in App.js.
              
           f] Copy all the container from logIn Component and paste it in Forgot-Password Component and make some 
              Changes. See forgot Component for more info.
              
           g] Check for forgot passwod by deleting all users from Database and Sign-Up with new user and click on 
              forgot password button.


                               *************** END *****************************


## Working On Role Based Authentication 


  Step 34:- Working on Role based authentication--------------
  
           a] Go into headers and create a dropdown menu [Go to bootstrap and search for navbar > responsive- 
              behaviour > Dropdown-Link] copy it and paste it inside header and make chances, see the Header 
              Component for more info.


                                **************** END *********************************

## Working on Dashboard and Admin 


  Step 35:- Working on Admin and DashBoard---------------------------
  
          a] Go to compass and make admin by changing role = 1 manualy and inside pages folder create a new folder 
             admin and make a file AdminDashboard.js and make it rafce and wrap it with Layout.
             
          b] Creating Backend for Admin Dashboard go to routes and set a routes for admin authentication see the 
             routes for more info.
             
          c] Make a new private route for Admin -- AdminRoutes.js inside routes folder and copy paste the whole from 
             Private.js with some changes.
             
          d] Now create a nested private-route innside the app.js see for more info.
          
          e] Make changes in header.js in dashboard button we have to check conditiobaly as---

                       <NavLink
                       
                              to={`/dashboard/${
                              
                                 auth?.user?.role === 1 ? "admin" : "user"
                                 
                              }`}
                              
                              className="dropdown-item"
                              
                              >
                              
                              Dashboard
                              
                      </NavLink>
                      
          f] go to in Spinner.js and pass a props for path and change navigate. see for more info and also pass path 
             = "" inside of AdminRoutes > Spinner. This handles if a user want to access Admin-Dashboard and for 
             handling axios error I have put all my codes of AdminRoutes inside try and catch block.


                      (((((((((((((((((( Working on Admin Dashboard ))))))))))))))))))
          
          g] Make a reusable component AdminMenu.js inside the Layouts folder and make it rafce.
          
              1) Go to bootstrap and search for list and copy the list with anchor tag and paste it in AdminMenu
                 Component and convert it into jsx and replace anchor tag with NavLink.
                 
              2) Now create buttons for Create Category, Create Products and, User and replace href with to and 
                 removes the rests. and also adds the routes see the AdminMenu Component for more info.
                 
              3) Go to AdminDashboard Component and create div with className container-fluid and inside this create 
                 div.row and inside this create two divs div.col-md-3 and div.col-md-9 [Using grid system of 
                 bootstrap]. And give margin and padding.
                 
              4) Make some changes in Content Part see the details.
              
              6) Now inside the pages > admin --- create two Components 1 for Create-Category and 2nd for Create-
                 Product and 1 more for users and make them rafce and make nested Links for them in app.js see
                 for more info.
                 
              7) Using bootstrap grid to divide the all three Components CreateCategory, CreateProducts and Users 
                 see for more info and give then titles.
      
                      ((((((((((((((((((((( Working on User Dashboard )))))))))))))))))))))

         h] Create a UserMenu Component inside the layouts folder make it rafce and copy paste all returns from 
            AdminMenu with some changes see for more info.
            
            1) Create Two more Components to support UserMenu inside the pages > users --- Orders.js and Profile.js 
               and  make them rafce and wrap them with Layout.
               
            2) By using bootstrap classes div.container-fluid.m-3.p-3 create a container and inside this container 
               there are  a div inside this container div.row and inside this div there are two divs div.col-md-3 
               and div.col-md-9 and  inside 1st div just import UserMenu and inside 2nd for now just writing 
               contents.
               
            3) In DashBoard Component give it a container-flued.m-3p-3 class and inside this div.row and inside this 
               there also two divs col-md-3 and col-md-9 
               
            4) Inside 1st div import UserMenu and inside the 2nd div Users details and imported some icons also and 
               create private nested routes for eacch Components Profile and Orders in App.js.
               
                                       ******************* END *******************


## Working on Categories

  step 36:- Working on Category--------------
  
                                  (((((((((((((((( In Back-End Category )))))))))))))))))

          1] Create a new model - categoryModel and using Slugify [npm i slugify {in node server}] and create a 
             slugify inside the schema see for more info.
             
          2] Creating routers file for category and also controller file and also requiring it in server.js see for
             more info.
             
          3] Now going to works on Categories APIs. see the category_controller.js for more info.

                              ((((((((((((((((((((( In Back-End Products )))))))))))))))))

          1] Creating Schema for Product also see the productModel.js for more info in models folder.
          
          2] Now creating a new file for products === products.js and import it in server.js as previous.
          
          3] To store image into database we have to install a package called 'formidable' by passisng command 
             -- npm i express-formidable
             
          4] Import it inside the router of product and passing it just after isAdmin middleware and call it as 
             a method.
             
          5] importing fs module inside the product controller for handeling image files. and destructureing data 
             not from req.body we have to get it from req.fields.
             
          6] now applying validations by using switch statements go and see the details.
          
          7] To getting products we have exclude photo since it takes too much time in loading see the 
             associated controller. We have to get the image/photo by another controller.

 step 37:- Working on Create-Category at frontEnd---------
 
          1] In Create- Category component Going to create a getAllCategory custom async method for call API from
             Backend. for this importing useState, useEffect, axios, toast.
             
          2] For initial life cycle using useEffect and calling the getAllCategory method inside it.
          
          3] For mapping go to bootstrap and search for table and copy it and paste it inside your return statement.
          
          4] Modifying this and adding map method for rendering the data and creating other reusable Component
             CategoryForm.js inside the Form folder inside Components. make it rafce. and also created a button for
             Edit the Category see the Create-Category Component for more info.
             
          5] Creating a form for creating new category whose value , setValue, and HandleSubmit passing through as
             a props. see CategoryForm Component for more info.
             
          6] inside create-Category creating state for value and setValue by using useState and also creating about
             handleSubmit method and passing it into the rendering tag of <categoryForm /> as a props. 
             
          7] creating delete button as well for working on edit functionality we have to use another framework 
             'Ant Design 5.0' -- search ant design and go to first site > click on component > search for 'modal'
             into search bar but before it go to development and see the command to install 'npm install antd' and
             install it in your react server.
             
               a) Apart from this we also need to import css for this -- click on getting started so i didn't find 
                  css link on antd website so, searching in google and found at stack-overflow which is
                  --- import 'antd/dist/antd.css'; and paste it in index.js of client. this also throw an error
                  since From v4 to v5, antd CSS files are no longer included in package. so wee need to inport 
                  'import antd/dist/reset.css'
                  
               b) Bringing modals from the website of ant design--- go to Create-Category component  creating a state
                  const [visible, setVisible] = useState(false) and for creating modal and passing CategoryForm 
                  inside this we need to create a modal see the Create category component for more info.
                  
               c) Creating two states for passing as a props inside the <createCategory />
               
                     ----- const [selected, useSelected] = useState(null);
                     
                           const [updatedName, setUpdatedName] = useState('');
                           
               d) now for update the name creating a state ---
               
                   const [updatedName, setUpdatedName] = useState("");
                   
               e) now in edit button setting onClick to ----
               
                           onClick={() => {
                           
                            setVisible(true);
                            
                            setUpdatedName(c.name);
                            
                          }}
                          
               f) after that setting our modal to -----
               
                   <Modal
                   
                        onCancel={() => {
                        
                           setVisible(false);
                           
                        }}
                        
                        footer={null}
                        
                        visible={visible}
                        
                        >
                        
                        <CategoryForm
                        
                           value={updatedName}
                           
                           setValue={setUpdatedName}
                           
                           handleSubmit={handleUpdate}
                           
                        />
                        
                  </Modal>
                  
               g) after that creating handleUpdate method see this for more info.

          8] Now going to work on the functionality of deleteCategory------------
          
               a) Copying the whole functionality of handleUpdate and paste it just bellow handleUpdate and change
                  its name to handleDelete and also make some changes , for more info see the handleDelete method.
                  
               b) In delete Button also make some changes -----------
               
                       <button
                       
                          className="btn btn-danger ms-2"
                          
                          onClick={() => {
                          
                            handleDelete(c._id);
                            
                          }}

                        >
                        
                          Delete
                          
                        </button>
                        
                                     ************************** END ******************




## Working on Product's CRUD [Front-End]

   Step 38:- Working on Products ---------------------

    a] Go to createProduct.js and create states for multiple fields see for more info.
    
           b] After that creating getAllCategory metthod for getting categories and importing axios and toast also.
           
           c] Also creating useEffect for initial life cycle.
           
           d] Now going to create Dropdown from antd so we have to import antd and destructure Option from Select.
           
           e] In return statement creating a div with className m-1 and inside it using Select and Option like
           
               <div className="div m-1 w-75">
               
                  <Select
                  
                     bordered={false}
                     
                     placeholder="Select a Category"
                     
                     size="large"
                     
                     showSearch
                     
                     className="form-select mb-3"
                     
                     // onChange={(value) => {
                     
                     //   setCategories(value);
                     
                     // }}
                     
                     onChange={(value) => {
                     
                        setCategory(value); // Update the correct state variable
                        
                     }}
                     
                  >
                  
                     {categories?.map((category) => {
                     
                        // console.log(categories);
                        
                        return (
                        
                        <Option key={category._id} value={category.name}>
                        
                           {category.name}
                           
                        </Option>
                        
                        );
                        
                     })}
                     
                  </Select>
                  
              </div>
              
              It will show a dropdown to select the category from categories.
              
            f] Now working on geting images for this i have created a div with className mb-3 and inside it performing
               some actions see the below code----
               
                   {/* For uploading photo */}
                   
              <div className="mb-3">
              
                <label className="btn btn-outline-secondary col-md-12">
                
                  {photo ? photo.name : "Upload Photo"}
                  
                  <input

                    type="file"
                    
                    name="photo"
                    
                    accept="image/*"
                    
                    onChange={(e) => {
                    
                      setPhoto(e.target.files[0]);
                      
                    }}
                    
                    hidden
                    
                  />
                  
                </label>
                
              </div>
              
            g] Now for getting preview using browser's URL see the bllow code-----
            
                {/* for setting preview */}
                
              <div className="mb-3">
              
                {photo && (
                
                  <div className="text-center">
                  
                    <img
                    
                      src={URL.createObjectURL(photo)} // getting photo from URL

                      alt="product-photo"
                      
                      height={"200px"}
                      
                      className="img img-responsive"
                      
                    />
                    
                  </div>
                  
                )}
                
              </div>
              
            h] Now going to work on different fields see the bellow code-----

                 {/* For taking more fields */}
                 
                     <div className="mb-3">
                     
                        <input
                        
                           type="text"
                           
                           value={name}
                           
                           placeholder="Write a name"
                           
                           className="form-control"
                           
                           onChange={(e) => {
                           
                           setName(e.target.value);
                           
                           }}
                           
                        />
                        
                     </div>
                     
                     <div className="mb-3">
                     
                        <textarea
                        
                           type="text"
                           
                           value={description}
                           
                           placeholder="Write Description"
                           
                           className="form-control"
                           
                           onChange={(e) => {
                           
                           setDescription(e.target.value);
                           
                           }}
                           
                        />
                        
                     </div>
                     
                     <div className="mb-3">
                     
                        <input
                        
                           type="number"
                           
                           value={price}
                           
                           placeholder="Write a price"
                           
                           className="form-control"
                           
                           onChange={(e) => {
                           
                           setPrice(e.target.value);
                           
                           }}
                           
                        />
                        
                     </div>
                     
                     <div className="mb-3">
                     
                        <input
                        
                           type="number"
                           
                           value={quantity}
                           
                           placeholder="Write Quantiy"
                           
                           className="form-control"
                           
                           onChange={(e) => {
                           
                           setQuantiy(e.target.value);
                           
                           }}
                           
                        />
                        
                     </div>
                     
                     <Select
                     
                        bordered={false}
                        
                        placeholder="Select a Shipping"
                        
                        size="large"
                        
                        showSearch
                        
                        className="form-select mb-3"
                        
                        // onChange={(value) => {
                        
                        //   setCategories(value);
                        
                        // }}
                        
                        onChange={(value) => {
                        
                           setShipping(value); // Update the correct state variable
                           
                        }}
                        
                     >
                     
                        <>
                        
                           <Option value="0">No</Option>
                           
                           <Option value="1">Yes</Option>
                           
                        </>
                        
                     </Select>
                     
                     </div>



          ************ We have to include onClick={handleCreate} in buttons ************



          ************ We have to include onClick={handleCreate} in buttons ************

                     <div className="mb-3">
                     
                     <button className="btn btn-primary">Create-Product</button>
                     
                     </div>

                   a] Now creating a method in createProduct component 'handleCreate' first i have handled
                      preventDefault behaviour of form, after that creating instance [OBJECT] of FormData and
                      appended all incoming fields like photo, name , category. price etc.
                      
                   b] In this method I have called axios request and pass the form fields to the API endPoints
                      for more info please visit CreateProduct Page.



