// import express from 'express';
// import bodyParser from 'body-parser';

// const app = express();
// const port = 3013;

// app.use(bodyParser.urlencoded({ extended: true }));


// let FORM = `
//     <form action="/submit" method="POST">
//         <div> 
//             <label for="Fname">FIRST NAME: </label>
//             <input type="text" id="Fname" name="Fname" required>
//         </div>
//         <br>
//         <div> 
//             <label for="Lname">LAST NAME: </label>
//             <input type="text" id="Lname" name="Lname" required>
//         </div>
//         <br>
//         <div> 
//             <button type="submit">Submit</button>
//         </div> 
//     </form>
// `;
// app.get('/', (req, res) => {
//     console.log("GET request received");
//     res.send(FORM);
// });




// app.post('/submit', (req, res) => {
//     console.log("POST request received", req.body);
//     const firstName = req.body.Fname;
//     const lastName = req.body.Lname;
//     res.send(`Welcome, ${firstName} ${lastName}! You submit the form successfully`);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
// import express from 'express';
// import bodyParser from 'body-parser';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();
// const port = 309;

// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve the HTML form file on GET request
// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, 'form.html')); // Serve form.html from the same directory
// });

// // Handle form submission with POST request
// app.post('/submit', (req, res) => {
//     const firstName = req.body.Fname;
//     const lastName = req.body.Lname;
//     res.send(`Welcome, ${firstName} ${lastName}!`);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
// import express from 'express';
// import bodyParser from 'body-parser';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();
// const port = 5236;

// app.set('view engine', 'ejs');
// app.set('views', join(__dirname, 'views'));

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.render('form');
// });

// app.post('/submit', (req, res) => {
//     // Log the form data, including the password
//     console.log(req.body); // This should show Fname, Lname, and password

//     const firstName = req.body.Fname;
//     const lastName = req.body.Lname;
//     const password = req.body.password; // Capture password from form data

//     if (!password) {
//         console.log('Password is missing!');
//     }

//     // Validate password here if needed

//     res.render('welcome', { firstName, lastName });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 7089;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
