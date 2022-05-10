const customers = [
    { id:1, name: 'victor'},
    { id:2, name: 'moses'},
    { id:3, name: 'randy'}
];

// Routes
app.get('/', (req, res) => {
  res.send('hello')
});

app.get('/api/customers', (req, res) => {
   res.send(customers);
});

// Put Request
app.put('/api/customers', (req, res) => {
     //Look up for customer
   const customer = customers.find(c => c.id === parseInt(req.query.id));
   if(!customer) res.status(404).send('Not Found');
   res.send(customer);

   const validationSchema = ({
       name:  Joi.string().min(3).max(30).required()
   });
   const result = validationSchema.validate(req.body, validationSchema);
   if(result.error) {
       res.status(400).send(result.error.detail[0].message);
       return;
   }

   customer.name = req.body.name;
   res.send(result);
});





// Post request routes
app.post('/api/customers', (req, res) => {
   const validationSchema = ({
       name:  Joi.string().min(3).max(30).required()
   });
   const result = validationSchema.validate(req.body, validationSchema);
   if(result.error) {
       res.status(400).send(result.error.detail[0].message);
       return;
   }
   
   const customer = {
       id: customers.length + 1,
       name: req.body.name
   }
   customers.push(customer);
   res.send(customer);
})

app.get('/api/customers/:id', (req, res) => {
   //Look up for customer
   const customer = customers.find(c => c.id === parseInt(req.query.id));
   if(!customer) res.status(404).send('Not Found');
   res.send(customer);
});