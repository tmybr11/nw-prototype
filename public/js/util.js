var Request = function(opt, onSuccess, onFail) {

  let req = new XMLHttpRequest(),
      method = opt.method,
      url = opt.url;

  let middleware = function(data, next) {

    let parsedJson = null;

    try {

      parsedJson = JSON.parse(data);
      next(parsedJson);

    } catch(err) { next(data); }

  }

  req.onreadystatechange = function() {

    if(this.readyState === 4 && this.status === 200) {
      if(onSuccess) middleware(this.responseText, onSuccess);
    } else if(this.readyState === 4 && this.status !== 200) {
      if(onFail) middleware(this.responseText, onFail);
    }

  };

  req.open(method, url, true);
  req.send();

}
