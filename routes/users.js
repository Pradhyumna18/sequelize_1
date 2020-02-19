var express = require('express');
//var router = express.Router();

const models = require('../models')

const app = express();
const port = 3000;

async function createUser(req, res, next) {
    try {
        const user = await models.user.create(req.body)
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(404); next(error);
    }
}
async function updateUser(req, res, next) {
    try {
        const user = await models.user.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }

}
async function getUsers(req, res, next) {
    try {
        const users = await models.user.findAll({
            where: {

                'softDelete': 'false'
            }
        })
        res.status(200).json({
            users
        })
    }
    catch (error) {
        next(error)
    }
}
async function getUserDetails(req, res, next) {
    try {
        const user = await models.user.findAll({

            include: [{
                model: models.Role,
                required: true,
                where: {
                    id: req.params.userId
                }
            }]

        })

        res.status(200).json({
            user
        })
    }
    catch (error) {
        next(error);
    }

}
async function deleteUser(req, res, next) {
    const deletedUser = await models.user.destroy({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedUser
    })
}
async function softDeleteUser(req, res, next) {
    try {
        const softDeletedUser = await models.user.update({
            'softDelete': 'true'
        }, {
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            softDeletedUser
        })
    }
    catch (error) {
        next(error);
    }
}
async function getProjectUsers(req, res, next) {
    try {
        const user = await models.user.findAll({

            include: [{
                model: models.Project,
                required: true,
                where: {
                    id: req.params.userId
                }
            }]
        })
        res.status(200).json({
            user
        })
    }
    catch (error) {
        next(error);
    }
}


module.exports = {
    createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser,
    softDeleteUser,
    getProjectUsers
}
