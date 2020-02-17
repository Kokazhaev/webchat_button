function setDocument() {
  if(document.createStyleSheet) {
    document.createStyleSheet('https://cdn.jsdelivr.net/gh/Kokazhaev/webchat_button/index.css');
  }
  else {
    var styles = "@import url(' https://cdn.jsdelivr.net/gh/Kokazhaev/webchat_button/index.css ');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
  }

  var documentId = document.getElementById('buttonScript').src

  function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
  }

  var secondColor = hexToRgbA(documentId.split('=')[3]).split(',');
  secondColor[1] = +secondColor[1] + 30;
  secondColor[2] = +secondColor[2] + 25;

  var bg = document.createElement('div');
  bg.id = 'bg';
  document.body.appendChild(bg);

  // chat ring main button 
  var chat_choose_svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  var chat_choose_path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  chat_choose_path.setAttribute("d", "M20.5505 2.48571H18.2782V0.485714C18.2782 0.228571 18.0785 0 17.8537 0H0.424495C0.199762 0 0 0.228571 0 0.485714V13.3429C0 13.6 0.199762 13.8286 0.424495 13.8286H2.69679V15.8286C2.69679 16.0857 2.89655 16.3143 3.12128 16.3143H5.31867V19.5143C5.31867 19.6857 5.41855 19.8571 5.5434 19.9429C5.59334 20 5.66825 20 5.74316 20C5.81807 20 5.91795 19.9714 5.99287 19.9143L10.5624 16.3143H20.5755C20.8002 16.3143 21 16.0857 21 15.8286V2.97143C20.975 2.68571 20.7753 2.48571 20.5505 2.48571ZM2.69679 2.97143V12.8571H0.848989V0.971429H17.4293V2.48571H3.12128C2.89655 2.48571 2.69679 2.71429 2.69679 2.97143ZM20.126 15.3429H10.4126C10.3377 15.3429 10.2378 15.3714 10.1629 15.4286L6.16766 18.6V15.8286C6.16766 15.5714 5.9679 15.3429 5.74316 15.3429H3.54578V3.45714H20.126V15.3429V15.3429Z");
  chat_choose_path.setAttribute("fill", "white");
  var chat_choose_path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  chat_choose_path1.setAttribute("d", "M6.56707 6.6H17.1045C17.3293 6.6 17.529 6.37143 17.529 6.11429C17.529 5.82857 17.3293 5.62857 17.1045 5.62857H6.56707C6.34234 5.62857 6.14258 5.85714 6.14258 6.11429C6.14258 6.37143 6.34234 6.6 6.56707 6.6Z");
  chat_choose_path1.setAttribute("fill", "white");
  var chat_choose_path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  chat_choose_path2.setAttribute("d", "M6.56707 9.6857H17.1045C17.3293 9.6857 17.529 9.45713 17.529 9.19999C17.529 8.94284 17.3293 8.71427 17.1045 8.71427H6.56707C6.34234 8.71427 6.14258 8.94284 6.14258 9.19999C6.14258 9.45713 6.34234 9.6857 6.56707 9.6857Z");
  chat_choose_path2.setAttribute("fill", "white");
  var chat_choose_path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  chat_choose_path3.setAttribute("d", "M6.56707 12.7714H12.4601C12.6848 12.7714 12.8846 12.5429 12.8846 12.2857C12.8846 12 12.7098 11.8 12.4601 11.8H6.56707C6.34234 11.8 6.14258 12.0286 6.14258 12.2857C6.14258 12.5429 6.34234 12.7714 6.56707 12.7714Z");
  chat_choose_path3.setAttribute("fill", "white");
  chat_choose_svg.setAttribute("width", "21");
  chat_choose_svg.setAttribute("height", "20");
  chat_choose_svg.setAttribute("viewBox", "0 0 21 20");
  chat_choose_svg.appendChild(chat_choose_path);
  chat_choose_svg.appendChild(chat_choose_path1);
  chat_choose_svg.appendChild(chat_choose_path2);
  chat_choose_svg.appendChild(chat_choose_path3);

  var chat_choose = document.createElement('chat_choose');
  chat_choose.className = 'chat_choose';
  chat_choose.style.backgroundColor = documentId.split('=')[3];
  chat_choose.appendChild(chat_choose_svg);

  var chat_ring = document.createElement('div');
  chat_ring.id = 'chat_ring';
  chat_ring.style.border = '2px solid ' + secondColor.join();
  chat_ring.appendChild(chat_choose);

  // chat list 
  var webchat_svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  webchat_svg.setAttribute("width", "20");
  webchat_svg.setAttribute("height", "18");
  webchat_svg.setAttribute("viewBox", "0 0 20 18");
  var webchat_path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var webchat_path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var webchat_path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var webchat_path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  webchat_path.setAttribute("d", "M16.7875 0.347694H3.19302C1.77166 0.347694 0.615234 1.50389 0.615234 2.92548V11.245C0.615234 12.6634 1.76662 13.8177 3.18386 13.8228V17.5981L8.60939 13.8228H16.7875C18.2088 13.8228 19.3652 12.6663 19.3652 11.245V2.92548C19.3652 1.50389 18.2088 0.347694 16.7875 0.347694V0.347694ZM18.2666 11.245C18.2666 12.0605 17.6031 12.7241 16.7875 12.7241H8.26469L4.28249 15.4952V12.7241H3.19302C2.3774 12.7241 1.71387 12.0605 1.71387 11.245V2.92548C1.71387 2.10974 2.3774 1.44633 3.19302 1.44633H16.7875C17.6031 1.44633 18.2666 2.10974 18.2666 2.92548V11.245Z");
  webchat_path.setAttribute("fill", "white");
  webchat_path1.setAttribute("d", "M5.63354 4.22964H14.3468V5.32828H5.63354V4.22964Z");
  webchat_path1.setAttribute("fill", "white");
  webchat_path2.setAttribute("d", "M5.63354 6.57339H14.3468V7.67203H5.63354V6.57339Z");
  webchat_path2.setAttribute("fill", "white");
  webchat_path3.setAttribute("d", "M5.63354 8.91714H14.3468V10.0158H5.63354V8.91714Z");
  webchat_path3.setAttribute("fill", "white");
  webchat_svg.appendChild(webchat_path);
  webchat_svg.appendChild(webchat_path1);
  webchat_svg.appendChild(webchat_path2);
  webchat_svg.appendChild(webchat_path3);

  var wc = document.createElement('span');
  wc.id = 'wc';
  wc.innerText = 'Открыть webchat';

  var webchat = document.createElement('div');
  webchat.id = 'webchat';
  webchat.style.backgroundColor = secondColor.join();
  webchat.appendChild(wc);
  webchat.appendChild(webchat_svg);

  var whatsapp_svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  whatsapp_svg.setAttribute("width", "20");
  whatsapp_svg.setAttribute("height", "20");
  whatsapp_svg.setAttribute("viewBox", "0 0 20 20");
  var whatsapp_path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var whatsapp_path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  whatsapp_path.setAttribute("d", "M17.1593 2.84073C15.3273 1.00876 12.8922 0 10.3012 0C10.3011 0 10.3004 0 10.3003 0C9.01886 0.000152588 7.77008 0.248261 6.5889 0.73761C5.40756 1.22696 4.34922 1.93451 3.443 2.84073C1.61118 4.67255 0.602419 7.10815 0.602419 9.69879C0.602419 11.2437 0.975191 12.7791 1.68152 14.147L0.0512718 18.8043C-0.0636269 19.1328 0.0177025 19.4899 0.263979 19.736C0.436251 19.9084 0.662997 20 0.896151 20C0.996096 20 1.09711 19.9832 1.19568 19.9487L5.85297 18.3186C7.22092 19.025 8.75626 19.3977 10.3012 19.3977C12.8918 19.3977 15.3273 18.3888 17.1593 16.557C18.9911 14.7252 20 12.2896 20 9.69894C20 7.10815 18.9912 4.67255 17.1593 2.84073V2.84073ZM16.3298 15.7275C14.7195 17.338 12.5784 18.2246 10.3012 18.2246C8.90808 18.2246 7.52411 17.8801 6.29883 17.2279C6.07666 17.1098 5.81406 17.0895 5.57831 17.1721L1.34705 18.653L2.82807 14.4217C2.91062 14.1856 2.89017 13.923 2.77207 13.701C2.12006 12.476 1.77536 11.0921 1.77536 9.69879C1.77536 7.42157 2.6622 5.28046 4.27246 3.6702C5.88257 2.06009 8.02338 1.17325 10.3004 1.17294H10.3012C12.5786 1.17294 14.7195 2.05978 16.3298 3.6702C17.9402 5.28046 18.8271 7.42142 18.8271 9.69879C18.8271 11.9762 17.9402 14.1173 16.3298 15.7275V15.7275Z");
  whatsapp_path.setAttribute("fill", "white");
  whatsapp_path1.setAttribute("d", "M13.9056 10.5652C13.4594 10.119 12.7334 10.119 12.2873 10.5652L11.7993 11.0532C10.5876 10.3929 9.60706 9.41238 8.94666 8.20068L9.43464 7.71271C9.88096 7.26654 9.88096 6.54053 9.43464 6.09436L8.11963 4.77936C7.67347 4.33319 6.94745 4.33319 6.50129 4.77936L5.44935 5.8313C4.84678 6.43387 4.81672 7.46979 5.36466 8.74832C5.84043 9.8584 6.7111 11.0785 7.81629 12.1837C8.92148 13.2889 10.1416 14.1595 11.2517 14.6353C11.8591 14.8956 12.4116 15.0255 12.8891 15.0255C13.4166 15.0255 13.8524 14.8669 14.1687 14.5506L15.2206 13.4985V13.4987C15.4368 13.2825 15.5559 12.9951 15.5559 12.6895C15.5559 12.3837 15.4368 12.0964 15.2206 11.8803L13.9056 10.5652ZM13.3392 13.7212C13.1672 13.8931 12.6384 13.9534 11.7138 13.5573C10.7376 13.1389 9.64795 12.3564 8.64576 11.3542C7.64356 10.352 6.86124 9.26254 6.44285 8.28629C6.04657 7.36176 6.10685 6.83273 6.27881 6.66077L7.31061 5.62897L8.58503 6.90353L7.97422 7.5145C7.69803 7.79068 7.63135 8.20953 7.80851 8.55682C8.61158 10.1315 9.86844 11.3884 11.4432 12.1915C11.7906 12.3686 12.2094 12.3021 12.4856 12.0258L13.0964 11.4149L14.371 12.6895L13.3392 13.7212Z");
  whatsapp_path1.setAttribute("fill", "white");
  whatsapp_svg.appendChild(whatsapp_path);
  whatsapp_svg.appendChild(whatsapp_path1);

  var wh = document.createElement('span');
  wh.id = 'wh';
  wh.innerText = 'Открыть whatsapp';

  var whatsapp = document.createElement('div');
  whatsapp.id = 'whatsapp';
  whatsapp.style.backgroundColor = secondColor.join();
  whatsapp.appendChild(wh);
  whatsapp.appendChild(whatsapp_svg);

  var chat_list = document.createElement('div');
  chat_list.id = 'chat_list';
  chat_list.appendChild(whatsapp);
  chat_list.appendChild(webchat);

  // chat 
  var frame = document.createElement('iframe');
  frame.src = 'http://localhost:3000';
  frame.frameBorder = '0';
  frame.width = '100%';
  frame.height = '500px';

  var close_svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  close_svg.setAttribute("width", "15");
  close_svg.setAttribute("height", "15");
  close_svg.setAttribute("viewBox", "0 0 15 15");
  var close_path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  close_path.setAttribute("d", "M9.15207 7.50095L14.7604 1.89204C14.9146 1.73764 14.9998 1.53166 15 1.31201C15 1.09224 14.9149 0.886004 14.7604 0.731847L14.2689 0.240474C14.1144 0.0857077 13.9084 0.000946045 13.6885 0.000946045C13.469 0.000946045 13.263 0.0857077 13.1085 0.240474L7.50024 5.84901L1.89171 0.240474C1.73744 0.0857077 1.53134 0.000946045 1.31159 0.000946045C1.09207 0.000946045 0.885976 0.0857077 0.731707 0.240474L0.24 0.731847C-0.08 1.05187 -0.08 1.57239 0.24 1.89204L5.84841 7.50095L0.24 13.1096C0.0856098 13.2642 0.000609756 13.4702 0.000609756 13.6899C0.000609756 13.9095 0.0856098 14.1155 0.24 14.27L0.731585 14.7614C0.885854 14.9161 1.09207 15.0009 1.31146 15.0009C1.53122 15.0009 1.73732 14.9161 1.89159 14.7614L7.50012 9.15276L13.1084 14.7614C13.2629 14.9161 13.4689 15.0009 13.6884 15.0009H13.6887C13.9083 15.0009 14.1143 14.9161 14.2688 14.7614L14.7602 14.27C14.9145 14.1156 14.9996 13.9095 14.9996 13.6899C14.9996 13.4702 14.9145 13.2642 14.7602 13.1097L9.15207 7.50095Z");
  close_path.setAttribute("fill", "white");
  close_svg.appendChild(close_path);

  var close = document.createElement('span');
  close.id = 'close';
  close.appendChild(close_svg);

  var head = document.createElement('div');
  head.className = 'head';
  head.appendChild(close);

  var chat = document.createElement('div');
  chat.id = 'chat';
  chat.appendChild(head);
  chat.appendChild(frame);

  // panel
  var panel = document.createElement('div');
  panel.className = 'panel';
  panel.appendChild(chat);
  panel.appendChild(chat_list);
  panel.appendChild(chat_ring);
  document.body.appendChild(panel);

  var buttonStatus = false;
  var chatStatus = false;

  function openChatChoose() {
    buttonStatus = !buttonStatus;
    if(chatStatus) {
      chatStatus = false;
      buttonStatus = false;
      chat.style.display = 'none';
      bg.style.display = 'none';
    } else {
      bg.style.display = buttonStatus ? 'block' : 'none';
      chat_list.style.display = buttonStatus ? 'block' : 'none';
    }
  }

  function showHint(type, status) {
    if(type === 'wh') {
      document.getElementById('wh').style.display = status ? 'none' : 'block'
    } else {
      document.getElementById('wc').style.display = status ? 'none' : 'block'
    }
  }

  function openWebchat() {
    buttonStatus = !buttonStatus;
    chatStatus = !chatStatus;
    chat.style.display = 'block';
    chat_list.style.display = buttonStatus ? 'block' : 'none';
  }

  whatsapp.onmouseenter = function() {
    showHint('wh')
  }
  webchat.onmouseenter = function() {
    showHint('wc')
  }
  whatsapp.onmouseleave = function() {
    showHint('wh', 'cl')
  }
  webchat.onmouseleave = function() {
    showHint('wc', 'cl')
  }
  close.onclick = openChatChoose;
  webchat.onclick = openWebchat;
  chat_ring.onclick = openChatChoose;
}

window.onload = setDocument;