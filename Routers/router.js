//setup path to resolve request

/* const { request } = require("express");
 */
//1) import express module
const express = require('express')


    //import controller
    const userController = require('../controllers/userController')
    const projectController = require('../controllers/projectController')


    //import jwtmiddleware
    const jwtMiddleware = require('../Middleware/jwtMiddleware')


    //import multer
    const multerConfig = require('../Middleware/multerMiddleware')

// 2)create an object for router class inside express module
const router = new express.Router()

// 3) setup path to resolve request
   //a) register
   //syntax - router.httprequest('path to resolve' ,()=>{how to resolve})
   //a)register
   router.post('/user/register',userController.register)

   //b) login
   router.post('/user/login',userController.login)

   //c) add project
   router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addproject)

   //d) home project
   router.get('/projects/home-project',projectController.gethomeProject)

   //e) all project
   router.get('/projects/all-project',jwtMiddleware,projectController.getallProject)
   //f)user-projects
   router.get('/user/user-project',jwtMiddleware,projectController.getuserProject)

   //g) edit
   router.put('/user-project/edit/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editUserProject)

   //h)delete
   router.delete('/user-project/remove/:id',jwtMiddleware,projectController.deleteProject)

   //edit profile
   router.put('/user/edit',jwtMiddleware,multerConfig.single('profile'),userController.editUser)

//4) export router
module.exports = router   