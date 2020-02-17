function setDocument() {
  var documentId = document.getElementById('buttonScript').src;
  var color = documentId.split('=')[3];
  console.log('picked color', color);

  // add fonts
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto&display=swap');
  document.head.appendChild(link);

  // main chat block
  var frame = document.createElement('iframe');
  frame.src = 'http://localhost:3000';
  frame.frameBorder = '0';
  frame.width = '100%';
  frame.height = '500px';

  var closeSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  closeSvg.setAttribute("width", "15");
  closeSvg.setAttribute("height", "15");
  closeSvg.setAttribute("viewBox", "0 0 15 15");
  var closePath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  closePath.setAttribute("d", "M9.15207 7.50095L14.7604 1.89204C14.9146 1.73764 14.9998 1.53166 15 1.31201C15 1.09224 14.9149 0.886004 14.7604 0.731847L14.2689 0.240474C14.1144 0.0857077 13.9084 0.000946045 13.6885 0.000946045C13.469 0.000946045 13.263 0.0857077 13.1085 0.240474L7.50024 5.84901L1.89171 0.240474C1.73744 0.0857077 1.53134 0.000946045 1.31159 0.000946045C1.09207 0.000946045 0.885976 0.0857077 0.731707 0.240474L0.24 0.731847C-0.08 1.05187 -0.08 1.57239 0.24 1.89204L5.84841 7.50095L0.24 13.1096C0.0856098 13.2642 0.000609756 13.4702 0.000609756 13.6899C0.000609756 13.9095 0.0856098 14.1155 0.24 14.27L0.731585 14.7614C0.885854 14.9161 1.09207 15.0009 1.31146 15.0009C1.53122 15.0009 1.73732 14.9161 1.89159 14.7614L7.50012 9.15276L13.1084 14.7614C13.2629 14.9161 13.4689 15.0009 13.6884 15.0009H13.6887C13.9083 15.0009 14.1143 14.9161 14.2688 14.7614L14.7602 14.27C14.9145 14.1156 14.9996 13.9095 14.9996 13.6899C14.9996 13.4702 14.9145 13.2642 14.7602 13.1097L9.15207 7.50095Z");
  closePath.setAttribute("fill", "white");
  closeSvg.appendChild(closePath);

  var close = document.createElement('span');
  close.id = 'close';
  close.style.position = 'absolute';
  close.style.right = '12px';
  close.style.top = 'calc(50% - 6px)';
  close.style.zIndex = '20';
  close.style.cursor = 'pointer';
  close.appendChild(closeSvg);

  var head = document.createElement('div');
  head.className = 'head';
  head.style.width = '100%';
  head.style.height = '50px';
  head.style.position = 'absolute';
  head.style.backgroundColor = 'transparent';
  head.appendChild(close);

  var chat = document.createElement('div');
  chat.id = 'chat';
  chat.style.border = '1px solid #DDDDDD';
  chat.style.position = 'absolute';
  chat.style.borderRadius = '5px';
  chat.style.width = '340px';
  chat.style.top = '-510px';
  chat.style.display = 'none';
  chat.appendChild(head);
  chat.appendChild(frame);

  // choosing block 
  var webchatText = document.createElement('div');
  webchatText.innerText = 'Открыть webchat';
  webchatText.style.fontFamily = 'Roboto';

  var webchatSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  webchatSvg.setAttribute("width", "20");
  webchatSvg.setAttribute("height", "18");
  webchatSvg.setAttribute("viewBox", "0 0 20 18");
  webchatSvg.style.marginRight = '5px';
  var webchatPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var webchatPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var webchatPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var webchatPath3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  webchatPath.setAttribute("d", "M16.7875 0.347694H3.19302C1.77166 0.347694 0.615234 1.50389 0.615234 2.92548V11.245C0.615234 12.6634 1.76662 13.8177 3.18386 13.8228V17.5981L8.60939 13.8228H16.7875C18.2088 13.8228 19.3652 12.6663 19.3652 11.245V2.92548C19.3652 1.50389 18.2088 0.347694 16.7875 0.347694V0.347694ZM18.2666 11.245C18.2666 12.0605 17.6031 12.7241 16.7875 12.7241H8.26469L4.28249 15.4952V12.7241H3.19302C2.3774 12.7241 1.71387 12.0605 1.71387 11.245V2.92548C1.71387 2.10974 2.3774 1.44633 3.19302 1.44633H16.7875C17.6031 1.44633 18.2666 2.10974 18.2666 2.92548V11.245Z");
  webchatPath.setAttribute("fill", color);
  webchatPath1.setAttribute("d", "M5.63354 4.22964H14.3468V5.32828H5.63354V4.22964Z");
  webchatPath1.setAttribute("fill", color);
  webchatPath2.setAttribute("d", "M5.63354 6.57339H14.3468V7.67203H5.63354V6.57339Z");
  webchatPath2.setAttribute("fill", color);
  webchatPath3.setAttribute("d", "M5.63354 8.91714H14.3468V10.0158H5.63354V8.91714Z");
  webchatPath3.setAttribute("fill", color);
  webchatSvg.appendChild(webchatPath);
  webchatSvg.appendChild(webchatPath1);
  webchatSvg.appendChild(webchatPath2);
  webchatSvg.appendChild(webchatPath3);

  var webchat = document.createElement('div');
  webchat.style.display = 'flex';
  webchat.style.justifyContent = 'center';
  webchat.style.alignItems = 'center';
  webchat.style.padding = '10px 0';
  webchat.style.cursor = 'pointer';
  webchat.style.color = color;
  webchat.appendChild(webchatSvg);
  webchat.appendChild(webchatText);

  var whatsappText = document.createElement('div');
  whatsappText.innerText = 'Открыть whatsapp';
  whatsappText.style.fontFamily = 'Roboto';

  var whatsappSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  whatsappSvg.setAttribute("width", "20");
  whatsappSvg.setAttribute("height", "20");
  whatsappSvg.setAttribute("viewBox", "0 0 20 20");
  whatsappSvg.style.marginRight = '5px';
  var whatsappPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  var whatsappPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  whatsappPath.setAttribute("d", "M17.1593 2.84073C15.3273 1.00876 12.8922 0 10.3012 0C10.3011 0 10.3004 0 10.3003 0C9.01886 0.000152588 7.77008 0.248261 6.5889 0.73761C5.40756 1.22696 4.34922 1.93451 3.443 2.84073C1.61118 4.67255 0.602419 7.10815 0.602419 9.69879C0.602419 11.2437 0.975191 12.7791 1.68152 14.147L0.0512718 18.8043C-0.0636269 19.1328 0.0177025 19.4899 0.263979 19.736C0.436251 19.9084 0.662997 20 0.896151 20C0.996096 20 1.09711 19.9832 1.19568 19.9487L5.85297 18.3186C7.22092 19.025 8.75626 19.3977 10.3012 19.3977C12.8918 19.3977 15.3273 18.3888 17.1593 16.557C18.9911 14.7252 20 12.2896 20 9.69894C20 7.10815 18.9912 4.67255 17.1593 2.84073V2.84073ZM16.3298 15.7275C14.7195 17.338 12.5784 18.2246 10.3012 18.2246C8.90808 18.2246 7.52411 17.8801 6.29883 17.2279C6.07666 17.1098 5.81406 17.0895 5.57831 17.1721L1.34705 18.653L2.82807 14.4217C2.91062 14.1856 2.89017 13.923 2.77207 13.701C2.12006 12.476 1.77536 11.0921 1.77536 9.69879C1.77536 7.42157 2.6622 5.28046 4.27246 3.6702C5.88257 2.06009 8.02338 1.17325 10.3004 1.17294H10.3012C12.5786 1.17294 14.7195 2.05978 16.3298 3.6702C17.9402 5.28046 18.8271 7.42142 18.8271 9.69879C18.8271 11.9762 17.9402 14.1173 16.3298 15.7275V15.7275Z");
  whatsappPath.setAttribute("fill", color);
  whatsappPath1.setAttribute("d", "M13.9056 10.5652C13.4594 10.119 12.7334 10.119 12.2873 10.5652L11.7993 11.0532C10.5876 10.3929 9.60706 9.41238 8.94666 8.20068L9.43464 7.71271C9.88096 7.26654 9.88096 6.54053 9.43464 6.09436L8.11963 4.77936C7.67347 4.33319 6.94745 4.33319 6.50129 4.77936L5.44935 5.8313C4.84678 6.43387 4.81672 7.46979 5.36466 8.74832C5.84043 9.8584 6.7111 11.0785 7.81629 12.1837C8.92148 13.2889 10.1416 14.1595 11.2517 14.6353C11.8591 14.8956 12.4116 15.0255 12.8891 15.0255C13.4166 15.0255 13.8524 14.8669 14.1687 14.5506L15.2206 13.4985V13.4987C15.4368 13.2825 15.5559 12.9951 15.5559 12.6895C15.5559 12.3837 15.4368 12.0964 15.2206 11.8803L13.9056 10.5652ZM13.3392 13.7212C13.1672 13.8931 12.6384 13.9534 11.7138 13.5573C10.7376 13.1389 9.64795 12.3564 8.64576 11.3542C7.64356 10.352 6.86124 9.26254 6.44285 8.28629C6.04657 7.36176 6.10685 6.83273 6.27881 6.66077L7.31061 5.62897L8.58503 6.90353L7.97422 7.5145C7.69803 7.79068 7.63135 8.20953 7.80851 8.55682C8.61158 10.1315 9.86844 11.3884 11.4432 12.1915C11.7906 12.3686 12.2094 12.3021 12.4856 12.0258L13.0964 11.4149L14.371 12.6895L13.3392 13.7212Z");
  whatsappPath1.setAttribute("fill", color);
  whatsappSvg.appendChild(whatsappPath);
  whatsappSvg.appendChild(whatsappPath1);

  var whatsapp = document.createElement('div');
  whatsapp.style.display = 'flex';
  whatsapp.style.justifyContent = 'center';
  whatsapp.style.alignItems = 'center';
  whatsapp.style.margin = '5px 0 15px';
  whatsapp.style.cursor = 'pointer';
  whatsapp.style.color = color;
  whatsapp.appendChild(whatsappSvg);
  whatsapp.appendChild(whatsappText);

  var choosingBlock = document.createElement('div');
  choosingBlock.style.alignItems = 'center';
  choosingBlock.style.borderRadius = '5px';
  choosingBlock.style.border = '1px solid ' + color;
  choosingBlock.style.boxSizing = 'border-box';
  choosingBlock.style.padding = '5px';
  choosingBlock.style.marginTop = '5px';
  choosingBlock.style.display = 'none';
  choosingBlock.appendChild(webchat);
  choosingBlock.appendChild(whatsapp);

  var mainText = document.createElement('div');
  mainText.innerText = 'Напишите нам';
  mainText.style.color = '#fff';
  mainText.style.fontFamily = 'Roboto';
  
  var mainBtn = document.getElementById('mainBtn');
  mainBtn.style.borderRadius = '5px';
  mainBtn.style.display = 'flex';
  mainBtn.style.alignItems = 'center';
  mainBtn.style.justifyContent = 'center';
  mainBtn.style.backgroundColor = color;
  mainBtn.style.cursor = 'pointer';

  mainBtn.appendChild(mainText);

  var main = document.getElementById('main');
  main.appendChild(choosingBlock);
  main.appendChild(chat);

  var buttonStatus = false;

  function openChooseBlock() {
    buttonStatus = !buttonStatus;
    if(buttonStatus) {
      chat.style.display = 'none';
    }
    choosingBlock.style.display = buttonStatus ? 'block' : 'none';
  }
  mainBtn.onclick = openChooseBlock;

  webchat.onclick = function() {
    buttonStatus = false;
    chat.style.top = mainBtn.getBoundingClientRect().y > 300 ? '-510px' : '50px';
    mainBtn.getBoundingClientRect().x > 200 ? chat.style.right = '0' : chat.style.left = '0';
    chat.style.display = 'block';
    choosingBlock.style.display = 'none';
  }

  close.onclick = function() {
    chat.style.display = 'none';
  }
}

window.onload = setDocument;