<template>
  <nav class="flexbox-child navigation">
    <header class="profile">
      <figure>
        <!-- <img src="{{user.avatar}}" alt="{{user.name}}"> -->
        <figcaption>Hello, <span>{{user.name}}</span>!</figcaption>
      </figure>
      <p><a href="#">设置</a> | <a href="#">退出</a></p>
    </header>
    <div class="menu">
      <ul>
        <li v-for="menu in menus" @click="switchMenu(menu)">
            <a :class="{'active': menu==activeMenu}" v-link="menu.state">{{menu.name}}</a>
        </li>
      </ul>
    </div>
    <footer>
      中文 | 英文
    </footer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      user: {
        avatar: '',
        name: 'Alice'
      },
      menus: [
        {name: 'Dashboard', state: '/dashboard'},
        {name: 'UserList', state: '/user'}
      ],
      activeMenu: null
    }
  },
  methods: {
    switchMenu (menu) {
      this.activeMenu = menu
    }
  },
  ready () {
    this.activeMenu = this.menus[0]
  }
}
</script>

<style>
nav {
    max-width: 250px;
    background: #3b4854;
}
nav header {
    position: relative;
    height: 80px;
    padding: 20px 0 0 15px;
    font-size: 16px;
    color: #fff;
    border-bottom: 1px solid #465563;
    background: #303b45;
}
nav header span {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 36px;
    margin: 0 10px 0 0;
    vertical-align: middle;
    border: 1px solid #fff;
}
nav header span::before {
    content: '\f007';
    font: normal 20px FontAwesome;
    top: 7px;
    left: 9px;
}
nav header a::before {
    content: '\f08b';
    font: normal 20px FontAwesome;
    top: 28px;
    right: 15px;
}
nav ul span {
    display: block;
    padding: 15px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    border-bottom: 1px solid #465563;
}
nav ul a {
    position: relative;
    display: block;
    padding: 15px 15px 17px 50px;
    color: #fff;
    border-bottom: 1px solid #465563;
}
nav ul a:hover,
nav ul a.active {
    background: #576674;
}
nav ul a::before {
    content: '\f08b';
    font: normal 16px FontAwesome;
    left: 20px;
}
</style>
