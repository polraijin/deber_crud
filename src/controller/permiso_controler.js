const express = require('express');
const router = express.Router();
const permiso = require('../model/permiso');

router.post('/permisos', async (req, res, next) => {
    const permiso_new = new permiso(req.body);
    await permiso_new.save();
    res.redirect('/');
  });

  router.get('/permisos', async (req, res) => {
    const new_permiso= await permiso.find();
    res.render('/permisos', {
      new_permiso
    });
  });

  router.get('/permisos/:id', async (req, res, next) => {
    let { id } = req.params;
    const new_permiso= await permiso.findById(id);
    new_permiso.status = !new_permiso.status;
    await new_permiso.save();
    res.redirect('/permisos');
  });

  router.delete('/permisos/:id', async (req, res, next) => {
    let { id } = req.params;
    await permisos.remove({_id: id});
    res.redirect('/permisos');
  });

  router.put('/permisos/:id', async (req, res, next) => {
    const { id } = req.params;
    await permiso.update({_id: id}, req.body);
    res.redirect('/permisos');
  });