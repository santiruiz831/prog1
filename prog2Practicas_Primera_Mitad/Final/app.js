if (!req.session.user) {
    res.render("login", { title: "login" });
         }
    else {
    res.redirect("/");
    if (bcrypt.compareSync(req.body.password, user.password)) {
              req.session.user = user;
              res.cookie("user", user, { maxAge: 1000 * 60 * 60 * 24 * 30 });
              res.redirect("/");
            } else {
              res.send("LA CONSTRASEÑA ES INCORRECTA");
            }
    }
     
