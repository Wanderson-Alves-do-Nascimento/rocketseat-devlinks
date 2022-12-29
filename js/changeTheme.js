function toggleMode(){
  // document.querySelector('#switch')
  const html = document.documentElement;

  html.classList.toggle('light');

  // Change profile image and alt

  const image = document.querySelector('#profile img')
  if(html.classList.contains('light')){
    image.setAttribute('src','./assets/avatar-light.png')
    image.setAttribute('alt','Imagem de perfil de Wanderson Alves de camiseta preta e headset em um fundo branco.')
  }else{
    image.setAttribute('src','./assets/avatar-dark.png')
    image.setAttribute('alt','Imagem de perfil de Wanderson Alves de camiseta preta e headset em um fundo preto.')
  }

}