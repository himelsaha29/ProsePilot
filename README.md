# [ProsePilot](https://yazdanz.github.io/ProsePilot/)

  [![CI](https://github.com/YazdanZ/ProsePilot/actions/workflows/main.yml/badge.svg?branch=gh-pages)](https://github.com/YazdanZ/ProsePilot/actions/workflows/main.yml)
  [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://yazdanz.github.io/ProsePilot/)

  <img src="https://github.com/YazdanZ/ProsePilot/blob/master/Website/assets/images/logo.png?raw=true" width=175> 
  


Are you tired of static text on your website?
Want to simultaneously adapt your writing style to different classes of readers?

Look no further than our ProsePilot button! With just a simple HTML integration, your readers can easily change the writing style of your text to fit their preferences. Whether they prefer the simplicity of a summary or the elegance of a New York Times article, our button has got them covered. Plus, by integrating your own API keys with GPT-3, the prose can be generated at build time for even more customization options. Not only does this add an interactive element to your website, but it also improves accessibility by catering to individual user needs. Give your ideas a wider audience with the ProsePilot button.

### [Try it out](https://yazdanz.github.io/ProsePilot/)

## Instructions for developers:

### ProsePilot™ can be added to any project in only 3 simple steps.

### 1. Copy and paste the link to our script in the HTML file's header section. 
```
<‍head>

...

  <‍script type="text/javascript"
  src="https://cdn.discordapp.com/attachments/1066065493825425418/1066548417783934986/prosepilot.js"><‍/script>

...

<‍/head>
```

### 2. Insert ProsePilot button by placing the HTML element into your code as such: 
```
<‍div>

...

  <‍prosepilot-element><‍/prosepilot-element>

...

<‍/div>
```


### 3. Add prosepilot-test-select as a class attribute to one or more HTML text elements. For example: 
```
<‍div class="prosepilot-text-select">
  This text will be prosepilotted!
<‍/div>
```
