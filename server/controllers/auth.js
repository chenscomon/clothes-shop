exports.authUsers = (req, res) => {
    const { email, displayName, password } = req.body;
    console.log(req.body);
    res.json({ message: 'Thank you' });
}

exports.getTest = (req, res) => {
    console.log('test');
    res.json('TEST');
}