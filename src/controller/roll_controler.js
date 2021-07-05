const express = require('express');
const router = express.Router();
const rol_permiso = require('../model/roll');

router.post('/rol', async (req, res, next) => {
    const permiso_new = new rol_permiso(req.body);
    await permiso_new.save();
    res.redirect('/');
  });

  router.get('/rol', async (req, res) => {
    const new_permiso= await rol_permiso.find();
    res.render('/rol', {
      new_permiso
    });
  });

  router.get('/rol/:id', async (req, res, next) => {
    let { id } = req.params;
    const new_permiso= await rol_permiso.findById(id);
    new_permiso.status = !new_permiso.status;
    await new_permiso.save();
    res.redirect('/rol');
  });

  router.delete('/rol/:id', async (req, res, next) => {
    let { id } = req.params;
    await rol.remove({_id: id});
    res.redirect('/rol');
  });

  router.put('/rol/:id', async (req, res, next) => {
    const { id } = req.params;
    await rol_permiso.update({_id: id}, req.body);
    res.redirect('/rol');
  });