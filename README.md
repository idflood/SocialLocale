# SocialLocale

The problem with social buttons (like) is that they use different language codes as parameter. For instance "fr" is a valid html language attribute, but facebook will only accept "fr_FR" and "fr_CA".

SocialLocale is a small javascript library to translate these language code. It currently support facebook and googleplus format.


ex:

  // print: en_US
  console.log(SocialLocale.toFacebookLocale("en"));

  // or you can do something like that
  var locale = SocialLocale.toFacebookLocale($("html").attr("lang"));
  if (locale) {
    bt_url += "?lang=" + locale
  }
