class MyCustomElement extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.shadow.innerHTML = `
        
        <select class="pilot-selector" onchange="prose()">
            <option value="default">Change Prose</option>
            <option value="reddit">Reddit</option>
            <option value="academic">Academic</option>
            <option value="nytimes">New York Times</option>
        </select>

        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo">
        <style>select {
            background-color: #4285F4;
            color: #fff;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        
        img {
            width: 20px;
            margin-right: 8px;
        }
        
        
        </style>
    `;
    }

    
  }
  
  customElements.define("my-custom-element", MyCustomElement);
  var newTexts = new Object(); // stores different non-original versions of texts
  var dict = {
    "default": [],
    "reddit": [],
    "academic": [],
    "nytimes": []
  };
  async function prose() {
    const dropdown = document.querySelector('my-custom-element').shadowRoot.querySelector("select");
    const selectedValue = dropdown.value;
    const elements = document.getElementsByClassName("prosepilot-text-select");
    // if cached, load array. If returning to original, load array
    if (dict[selectedValue].length!=0 || selectedValue=="default") {
        var i = 0;
        for (const element of elements) {
            element.textContent = dict[selectedValue][i]
        }
        i++;
        return;
    }
    else {
        // save original if needed
        if (dict["default"].length==0) {
            for (const element of elements) {
                dict["default"].push(element.textContent)
            }
        } 
        // do API call and save to array
        for (const element of elements) {
            const text = element.textContent;
            // Get the text from the element and nested elements
            const result = await callgpt(text, selectedValue)
            element.textContent = result
            dict[selectedValue].push(result)
        }
    }
    

}

async function callgpt(inputtext, style) {
    pilotButton = document.getElementsByName("my-custom-element");
    const apiKey = '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';
    const model = "text-davinci-003";
    //const prompt = "Say this is a test:";
    const prompt = "Write the following text in the style of " + style + ":\n" + inputtext;
    const max_tokens = 256;
    const temperature = 0.7;
    const url = "https://api.openai.com/v1/completions";
    const data = {
        "model": model,
        "prompt": prompt,
        "max_tokens": max_tokens,
        "temperature": temperature
    };
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            resolve(data['choices'][0]['text']);
            // Do something with the response data
        })
        .catch(error => {
            console.error('Error:', error);
        });
      });

    
}

  