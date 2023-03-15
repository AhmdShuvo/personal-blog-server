module.exports=(sequelze,dataTypes)=>{

    const Posts=sequelze.define("Posts",{

        "title":{
            type:dataTypes.STRING,
            allowNull:false
        },
        "PostText":{
            type:dataTypes.STRING,
            allowNull:false
        },
        "username":{
            type:dataTypes.STRING,
            allowNull:false
        },

    })
    return Posts
};