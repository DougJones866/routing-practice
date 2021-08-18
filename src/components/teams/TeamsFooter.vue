<template>
 <footer>
    <h2>Teams Footer</h2>
 </footer>
</template>

<style scoped>
footer {
    position:absolute;
   bottom:0;
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

h2 {
    color: white;
    text-align: center;
}
a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}

</style>