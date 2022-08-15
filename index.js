const DB = {
    collections: {
        posts: {
            post_1: {
                name: 'Post 1',
                text: 'Some text 1'
            },
            post_2: {
                name: 'Post 2',
                text: 'Some text 2'
            }
        },
        comments: {
            comment_1: {
                postId: 'post_1',
                text: 'Comment 1'
            },
            comment_2: {
                postId: 'post_1',
                text: 'Comment 2'
            }
        }
    }
};

const useCollection = coll => {
    if (!DB.collections[coll]) {
        DB.collections[coll] = {}
    }
    const collection = DB.collections[coll];
    const obj = {};

    obj.get = (item) => {
        const info = collection[item];
        if (!info) {
            return null;
        }
        return {
            id: item,
            ...info,
        }
    }

    obj.create = (item) => {
        const idNum = Object.keys(collection);
        let newItem = (idNum.slice(-1)[0]).replace(/[0-9]/g, '');
        let index = idNum.length + 1;
        let id = newItem + index;

        if (!collection) {
            return null;
        } 
        return collection[id] = item;
    }

    obj.deleteOne = (item) => {
        if (!collection) {
            return null;
        }
        delete collection[item];
        
    }

    obj.edit = (item, data) => {
        collection[item] = data;
    }

    return obj;
};

const collection = useCollection('posts');


// collection.get('some-id')
// collection.create(data);
// collection.deleteOne('some-id');
// collection.edit('some-id', dataToEdit);