#Instant Messaging Buttons

The main idea is to create simple buttons to share an article from a blog, or any webpage using **Line** or **Whatsapp**.

For now, buttons can:

* Detect current `URL`, and add it to the content to be shared.
* Detect page `<title>` before URL in the message.


##References

Line has its own button to share links, the [**LINE it! Button**](http://media.line.me/en/). It needs an external Javascript file and also gives you the images to use for the same function.

As for Whatsapp, there's a tool that generates this button called [Whatsapp Sharing Button Generator](http://whatsapp-sharing.com/). Almost the same thing as Line's.

As the Whatsapp button generator says:

>iPhone users are clicking their new WhatsApp button more than Twitter's. This was enough for us to build a WhatsApp sharing button generator, so you can easily create your own. — [According to Buzzfeed](http://qz.com/179261/people-are-already-sharing-more-buzzfeed-stories-to-whatsapp-than-to-twitter/).

Since I'm more of a Line fan, I started there.


##Structure

Both applications use different structure in the process of sharing a link there. They use something called [URL Scheme](http://help.contrast.co/hc/en-us/articles/200865293-URL-Scheme-Intro-for-App-Developers).

Line's structure is:

`line://msg/text/Web Title http://link.to/be/shared`

While Whatsapp's structure is:

`whatsapp://send?text=Web Title http://link.to/be/shared`

So what I have does is make this work while there's a link with a `class="line-btn"` or `class="whatsapp-btn"`. Both buttons are ugly, I know, because I just wanted the logic to work. In any case, here are official sources to get their logos:

*  [Whatsapp Logos](http://media.whatsapp.com/logos/Vector)
*  [Using the LINE logo](http://line.me/logo/en)

###Comments

* Of course, this links must be tried from a phone with these apps already installed. I tried on an iPhone with iOS8 (in case it doesnt't work in other OS).
*