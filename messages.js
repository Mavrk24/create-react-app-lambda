
import React from 'react'

const i_msg =  [" Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - Mark Twain", "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I do not think you can go wrong. - Ella Fitzgerald"];
const n_msg =  [" A monitor located at a high level is a source of discomfort and, in the long run, can cause musculoskeletal problems in the neck and shoulder area. At a workstation where the desk and chair heights are properly adjusted, the monitor should be placed at the same level as the keyboard."];
const m_msg = ["Mouse is positioned far away from th ekeyboard; the wrist is bent at an awkward position; Mouse may be too low"]
const k_msg = ["Bring keyboard closer, Install keyboard drawer;  Raise chair height; Keep arms at 90 degree angle when typing"]
const c_msg = ["Change your sitting or working position every twenty or thirty minutes Stretch the muscles in your arms, hands, wrists and legs every hour. Make sure your wrists are in a straight position; do not bend or twist them too often. Give your eyes a rest from the computer every ten minutes."]




const value = [i_msg,n_msg,m_msg,k_msg,c_msg]
const Messages = () => {
      return value
}

export default Messages();
=======
import React from 'react'

const quote =  [
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
      ,"Just don't give up trying to do what you really want to do. Where there is love and inspiration, I do not think you can go wrong."
      , "If there is no struggle, there is no progress."
      ,"Do the best you can until you know better. Then when you know better, do better."
      , "Be not afraid of growing slowly; be afraid only of standing still."
];
const author = ["Mark Twain","Ella Fitzgerald","Frederick Douglass","Maya Angelou","Chinese Proverb"]
const i_msg = []
for (let i = 0; i < author.length; i++) {
      i_msg[i] = [quote[i],author[i]]
}; 
const nd = [""
      ,"- Your monitor distance is too far, try bringing your seat closer or bringing the monitor closer"
      ,"- Your monitor distance is too close, try to move it further"];
const nr = ["","- The monitor is causing you to rotate too much, try moving it where you will be more comfortable"];
const ns = ["","- There isn't enough space for the monitor, try clearing things up"];
const nb = ["","- Too much brightness in the monitor, try adjusting it down"];
const nt = ["","- Too much time spent over monitor, try spending more time doing other activities"];
const n_msg = [nd,nr,ns,nb,nt];
const md = [""
      ,"- Your mouse distance is too far, try bringing your seat closer or bringing the mouse closer"
      ,"- Your mouse distance is too close, try to move it further"];
const mr = ["","- The mouse is causing you to rotate too much, try moving it where you will be more comfortable"];
const mg = ["","- Your mouse grip is causing you strain, try relaxing to move more freely"];
const mt = ["","- Too much time spent clicking, try relaxing your palm once in a while to avoid strain"];
const mp = ["","- Try using a mouse pad; if possible"]
const m_msg = [md,mr,mg,mt,mp];
const kd = [""
      ,"- Your keyboard distance is too high, try raising your seat higher or bringing the keyboard lower"
      ,"- Your keyboard distance is too low, try to move it higher"];
const kr = ["","- The keyboard is causing you to rotate too much, try moving it where you will be more comfortable"];
const kf = ["","- Your keyboard is fixed; try using the one that is adjustable "];
const ks = ["","- There isn't enough space for the keyboard, try clearing things up"]
const kt = ["","- Too much time spent typing, try relaxing your wrist once in a while to avoid strain"];
const k_msg = [kd,kr,kf,ks,kt];
const c_msg = ["Change your sitting or working position every twenty or thirty minutes Stretch the muscles in your arms, hands, wrists and legs every hour. Make sure your wrists are in a straight position; do not bend or twist them too often. Give your eyes a rest from the computer every ten minutes."];




const value = [i_msg,n_msg,m_msg,k_msg,c_msg]
const Messages = () => {
      return value
}

export default Messages();

