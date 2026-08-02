/api/v1 : {

    /vendor : {

        1.) req :
        POST /register
        {
            merchantName,
            email,
            password
        }
        res :
        pass : 409 Conflict {message}

        2.) req :
        POST /loginWemail
        {
            email,
            password
        }
        res :

        3.)req :
        POST /loginWmerchantID
        {
            merchantID,
            password
        }
        res :
    }
}
