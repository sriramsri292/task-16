const greet = (message = "", cb = (d) => {}) => {
    console.log(message);
    cb(message);
  };
  
  greet(10, () => {
    console.log("dasdasd");
    greet(9, () => {
      greet(8, () => {
        greet(7, () => {
          greet(6, () => {
            greet(5, () => {
              greet(4, () => {
                greet(3, () => {
                  greet(2, () => {
                    greet(1, () => {
                      greet("Happy Independence Day!!!");
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  