
function writeForm(form) {
  var ime = form.ime.value;
  var priimek = form.priimek.value;
  var podjetje = form.podjetje.value;
  var email = form.email.value;
  var telefon = form.telefon.value;
  var drzava = form.drzava.value;
  var sporocilo = form.sporocilo.value;
  var kontaktPo = form.kontaktPo.value;

  var superString = ime + priimek + "\n" + podjetje + "\n" + email + "\n" + telefon + "\n" + drzava + "\n" + kontaktPo + "\n" + sporocilo;
  alert(superString);
}

function checkValidity(form) {
    var check = true;

    var email = form.email.value;
    var drzava = form.drzava.value;
    console.log("I'm on the inside");
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email_regex.test(email)) {
      form.email.focus();
      form.email.style.backgroundColor = "rgba(255, 0, 0)";
      alert("narobe");
      check = false;
    }
    else {
      form.drzava.style.backgroundColor = "inherit";
      alert("prav");
    }

    if(drzava != "SLO") {
      form.drzava.focus();
      form.drzava.style.backgroundColor = "rgba(255, 0, 0)";
      check = false;
    }
    else {
      form.drzava.style.backgroundColor = "inherit";
    }

    if(check) {
      writeForm(form);
    }
    
    return check;
}
