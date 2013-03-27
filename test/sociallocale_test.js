/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
/*global SocialLocale*/
(function($) {

	/*
		======== A Handy Little QUnit Reference ========
		http://docs.jquery.com/QUnit

		Test methods:
			expect(numAssertions)
			stop(increment)
			start(decrement)
		Test assertions:
			ok(value, [message])
			equal(actual, expected, [message])
			notEqual(actual, expected, [message])
			deepEqual(actual, expected, [message])
			notDeepEqual(actual, expected, [message])
			strictEqual(actual, expected, [message])
			notStrictEqual(actual, expected, [message])
			raises(block, [expected], [message])
	*/

	module('testFacebook');

	test( 'unsupported language code', function() {
		equal(SocialLocale.toFacebookLocale("endefr"), false);
		equal(SocialLocale.toFacebookLocale("afZA"), false);
	});

	test( 'only supprted by google', function() {
		equal(SocialLocale.toFacebookLocale("am"), false);
		equal(SocialLocale.toFacebookLocale("gu"), false);
	});

	test( 'only supprted by facebook', function() {
		equal(SocialLocale.toFacebookLocale("hy"), "hy_AM");
	});

	test( 'african', function() {
		equal(SocialLocale.toFacebookLocale("af"), 'af_ZA');
		equal(SocialLocale.toFacebookLocale("af-ZA"), 'af_ZA');
		equal(SocialLocale.toFacebookLocale("af-GB"), 'af_ZA');
	});

	test( 'arabic', function() {
		equal(SocialLocale.toFacebookLocale("ar"), 'ar_AR');
		equal(SocialLocale.toFacebookLocale("ar-AR"), 'ar_AR');
		equal(SocialLocale.toFacebookLocale("ar-GB"), 'ar_AR');
		equal(SocialLocale.toFacebookLocale("aao"), 'ar_AR');
		equal(SocialLocale.toFacebookLocale("arb"), 'ar_AR');
	});

	test( 'azerbaijani', function() {
		equal(SocialLocale.toFacebookLocale("az"), 'az_AZ');
		equal(SocialLocale.toFacebookLocale("azb"), 'az_AZ');
		equal(SocialLocale.toFacebookLocale("az-GB"), 'az_AZ');
	});

	test( 'catalan', function() {
		equal(SocialLocale.toFacebookLocale("ca"), 'ca_ES');
		equal(SocialLocale.toFacebookLocale("ca-ES"), 'ca_ES');
	});

	test( 'english', function() {
		equal(SocialLocale.toFacebookLocale("en"), 'en_US');
		equal(SocialLocale.toFacebookLocale("en-US"), 'en_US');
		equal(SocialLocale.toFacebookLocale("en-GB"), 'en_GB');
		equal(SocialLocale.toFacebookLocale("en-TEST"), 'en_US');
	});

	test( 'spanish', function() {
		equal(SocialLocale.toFacebookLocale("es"), 'es_ES');
		equal(SocialLocale.toFacebookLocale("es-ES"), 'es_ES');
		equal(SocialLocale.toFacebookLocale("es-419"), 'es_LA');
		equal(SocialLocale.toFacebookLocale("es-TEST"), 'es_ES');
	});

	test( 'french', function() {
		equal(SocialLocale.toFacebookLocale("fr"), 'fr_FR');
		equal(SocialLocale.toFacebookLocale("fr-CA"), 'fr_CA');
		equal(SocialLocale.toFacebookLocale("fr-CH"), 'fr_FR');
	});

	// "id" is a subtag of malay, but we want "id" since it's more specific
	test( 'indonesian', function() {
		equal(SocialLocale.toFacebookLocale("id"), 'id_ID');
	});

	test( 'Latvian', function() {
		equal(SocialLocale.toFacebookLocale("lv"), 'lv_LV');
		equal(SocialLocale.toFacebookLocale("lv-test"), 'lv_LV');
		equal(SocialLocale.toFacebookLocale("ltg"), 'lv_LV');
		equal(SocialLocale.toFacebookLocale("lvs"), 'lv_LV');
	});

	test( 'malay', function() {
		equal(SocialLocale.toFacebookLocale("ms"), 'ms_MY');
		equal(SocialLocale.toFacebookLocale("ms-ID"), 'ms_MY');
		equal(SocialLocale.toFacebookLocale("in"), 'ms_MY');
		equal(SocialLocale.toFacebookLocale("meo"), 'ms_MY');
		equal(SocialLocale.toFacebookLocale("xmm"), 'ms_MY');
	});

	test( 'portuguese', function() {
		equal(SocialLocale.toFacebookLocale("pt"), 'pt_PT');
		equal(SocialLocale.toFacebookLocale("pt-PT"), 'pt_PT');
		equal(SocialLocale.toFacebookLocale("pt-BR"), 'pt_BR');
	});

	test( 'filipino', function() {
		equal(SocialLocale.toFacebookLocale("tl"), 'tl_PH');
	});



	module('testGoogle');

	test( 'unsupported language code', function() {
		equal(SocialLocale.toGoogleLocale("endefr"), false);
		equal(SocialLocale.toGoogleLocale("afZA"), false);
	});

	test( 'only supprted by google', function() {
		equal(SocialLocale.toGoogleLocale("am"), "am");
		equal(SocialLocale.toGoogleLocale("gu"), "gu");
		equal(SocialLocale.toGoogleLocale("zu-TMP"), "zu");
	});

	test( 'only supprted by facebook', function() {
		equal(SocialLocale.toGoogleLocale("hy"), false);
	});

	test( 'african', function() {
		equal(SocialLocale.toGoogleLocale("af"), 'af');
		equal(SocialLocale.toGoogleLocale("af-ZA"), 'af');
		equal(SocialLocale.toGoogleLocale("af-GB"), 'af');
	});

	test( 'english', function() {
		equal(SocialLocale.toGoogleLocale("en"), 'en-US');
		equal(SocialLocale.toGoogleLocale("en-PI"), 'en-US');
		equal(SocialLocale.toGoogleLocale("en-GB"), 'en-GB');
	});

	test( 'filipino', function() {
		equal(SocialLocale.toGoogleLocale("tl"), 'fil');
	});

	module('testTwitter');

	test( 'unsupported language code', function() {
		equal(SocialLocale.toTwitterLocale("endefr"), false);
		equal(SocialLocale.toTwitterLocale("gu"), false);
	});

	test( 'filipino', function() {
		equal(SocialLocale.toGoogleLocale("fil"), 'fil');
	});

}( jQuery ));
