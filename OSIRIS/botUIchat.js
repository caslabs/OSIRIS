var botui = new BotUI('hello-world') // id of container
const { exec } = require('child_process');
const {ipcRenderer} = require('electron');
botui.message.bot({ // show first message
    photo: 'https://moin.im/face.svg',
  delay: 200,
  content: 'hello'
}).then(() => {
  return botui.message.bot({ // second one
    photo: 'https://moin.im/face.svg',
    delay: 1000, // wait 1 sec.
    content: 'how are you?'
  })
}).then(() => {
  return botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: 'Good',
        value: 'good'
      },
      {
        text: 'Really Good',
        value: 'really_good'
      },
      {
        text: 'Sad.',
        value: 'really_good'
      }
    ]
  })
}).then(res => {
  return botui.message.bot({
    photo: 'https://moin.im/face.svg',
    delay: 1000,
    content: `You are feeling ${res.text}!`
  })
})
.then(() => {
    return botui.message.bot({ // let user do something
        photo: 'https://moin.im/face.svg',
      delay: 1000,
      content: `That's great to hear!`
    })
  }).then(() => {
    return botui.message.bot({ // let user do something
        photo: 'https://moin.im/face.svg',
      delay: 3000,
      content: `My name is OSIRIS`
    })
  }).then(() => {
    return botui.message.bot({ // let user do something
        photo: 'https://moin.im/face.svg',
      delay: 2000,
      content: `You probably know that by now...`
    })
  }).then(() => {
    return botui.message.bot({ // let user do something
        photo: 'https://moin.im/face.svg',
      delay: 1000,
      content: `Anyways,`
    })
  }).then(() => {
    return botui.message.bot({ // let user do something
        photo: 'https://moin.im/face.svg',
      delay: 1000,
      content: `I'm your personalized school counselor!`
    })
  }).then(() => {
    return botui.action.button({ // let user do something
      delay: 1000,
      action: [
        {
          text: 'What do you do exactly?',
          value: 'how'
        },
        {
          text: "Let's talk about school.",
          value: 'really_good'
        }
      ]
    })
}).then(res => {
    if (res.value==='how') {
        return botui.message.bot({
        
            photo: 'https://moin.im/face.svg',
            delay: 1000,
            content: `I am a simple natural language processing bot`
          })
    } else {
        return botui.message.bot({
        
            photo: 'https://moin.im/face.svg',
            delay: 1000,
            content: `Ok.`
          }).then(() => {
            return botui.action.button({ // let user do something
              delay: 1000,
              action: [
                {
                  text: 'Tell me my GPA',
                  value: 'how32'
                },
                {
                  text: "What am I missing?",
                  value: 'really_good'
                },
                {
                    text: "When is the next school break?",
                    value: 'really_good'
                  },
                  {
                    text: "Open GradeCheck",
                    value: 'gradecheck'
                  }
              ]
            })
        })
    }
  }).then(res => {
    if (res.value==="gradecheck") {
        ipcRenderer.send("execJava", "start"); 
        return botui.message.bot({
            photo: 'https://moin.im/face.svg',
            delay: 1000,
            content: `Initiating GradeCheck...`
          })
    } else if (res.value==="how32") {
        return botui.message.bot({
            photo: 'https://moin.im/face.svg',
            delay: 1000,
            content: `Opening Infinite Campus`
          }).then(() => {
            return botui.message.bot({ // second one
              photo: 'https://moin.im/face.svg',
              delay: 1000, // wait 1 sec.
              content: "You're current GPA is..."
            })
          }).then(() => {
            return botui.message.bot({ // second one
              photo: 'https://moin.im/face.svg',
              delay: 2000, // wait 1 sec.
              content: '3.5'
            })
          }).then(() => {
            return botui.message.bot({ // second one
              photo: 'https://moin.im/face.svg',
              delay: 2000, // wait 1 sec.
              content: 'magna summa cum status'
            }).then(() => {
                return botui.message.bot({ // second one
                  photo: 'https://moin.im/face.svg',
                  delay: 2000, // wait 1 sec.
                  content: 'Nice.'
                })
              }).then(() => {
                return botui.action.button({ // let user do something
                  delay: 1000,
                  action: [
                    {
                      text: 'Can I improve my GPA?',
                      value: 'how'
                    },
                    {
                      text: "Ok.",
                      value: 'really_good'
                    }
                  ]
                })
            })
          }).then(res => {
            if (res.value==="how") {
                return botui.message.bot({ // second one
                    photo: 'https://moin.im/face.svg',
                    delay: 2000, // wait 1 sec.
                    content: "Ofcourse. It's not the end of the world."
                  })
            }
          }).then(() => {
            return botui.message.bot({ // second one
              photo: 'https://moin.im/face.svg',
              delay: 1000, // wait 1 sec.
              content: 'Examining all your current classes...'
            })
          }).then(() => {
            return botui.message.bot({ // let user do something
                photo: 'https://moin.im/face.svg',
              delay: 1000,
              content: `It seems you have several missing assignments...`
            })
          }).then(() => {
            return botui.message.bot({ // let user do something
                photo: 'https://moin.im/face.svg',
              delay: 1000,
              content: `Do you want to go over it with GradeCheck?`
            })
          }).then(() => {
            return botui.action.button({ // let user do something
              delay: 1000,
              action: [
                {
                  text: 'Yes',
                  value: 'yes'
                },
                {
                  text: 'Not really...',
                  value: 'nono'
                },
              ]
            })
          }).then(() => {
            ipcRenderer.send("execJava", "start"); 
            return botui.message.bot({
                photo: 'https://moin.im/face.svg',
                delay: 1000,
                content: `Initiating GradeCheck...`
            })
          })
    }

  })

 