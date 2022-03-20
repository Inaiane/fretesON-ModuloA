import  {db}  from '../config/firebaseConfig.js';

const userCollection = 'usuarios';

let get = (req, res, next) => {
    (async () => {
        try {
            const userQuerySnapshot = await db.collection(userCollection).get();
            const users = [];
            userQuerySnapshot.forEach((doc)=>{
                users.push({
                    id: doc.id,
                    data:doc.data()
                });
            });
            return res.status(200).json(users);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
};

let getById = (req, res, next) => {
    let userId = req.params.userId;

    (async () => {
        try {
            const result = await db.collection(userCollection).doc(userId).get();
            const user = result.data();
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
};

let post = (req, res, next) => {
    let data = req.body;
    (async () => {
        try {
            await db.collection(userCollection).add(data);
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
};

let update = (req, res, next) => {
    let userId = req.params.userId;
    let data = req.body;

    (async () => {
        try {
            await db.collection(userCollection).doc(userId).set(data,{merge:true});
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
};

let deleteUser = (req, res, next) => {
    let userId = req.params.userId;

    (async () => {
        try {
            await db.collection(userCollection).doc(userId).delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
};

let userController = {
    'get': get,
    'getById': getById,
    'post': post,
    'update': update,
    'deleteUser': deleteUser
}

export {userController};