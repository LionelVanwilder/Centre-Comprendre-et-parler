<template>
    <div class="breadcrumb-container">
      <ul class="breadcrumb-first">
        <li v-for="(crumb, index) in breadcrumbs" :key="index">
          <RouterLink :to="crumb.to" class="breadcrumb-routerlink">{{ crumb.label }}</RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BreadCrumbCom',
    props: {
      breadcrumbs: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>

  .breadcrumb-container{
    background-color: #ACD8E7;
    border-radius: 8px;
    padding: 1rem 2rem;
    margin: 4rem;
  }
  
  ul {
    display: flex;
    margin: auto;
    width: 100%;
   
  }

  .router-link-active{
    font-weight: 600;
   
  }
  /*.breadcrumb-first li:first-child:before{
    content: url('../../../../icons/house-solid.svg');
    height: 1.1rem;
    width: 1.1rem;
    display: inline-block;
    margin: 0 1rem;
  }*/

.breadcrumb-first li:not(:last-child):after{
    content: url('../../../../icons/breadcrumb_right.svg');
    height: 0.4rem;
    width: 0.4rem;
    display: inline-block;
    margin: 0 1rem;
    color: #ffffff;
   
}

.breadcrumb-first a{
  cursor: pointer;
  color: #005387;
}


.breadcrumb-first a:hover{
  text-decoration: underline;
}

@media all and (max-width: 500px){
        

        .breadcrumb-first li:first-child:before{
          display: none;
        }

        .breadcrumb-container{
          margin: 4rem 1.5rem;
          padding: 1rem;
        }

        
    }

@media all and (max-width: 400px){
      .breadcrumb-container{
        margin: 4rem 1rem;
      }

      .breadcrumb-first a{
        font-size: 0.9rem;
      }
    }



  </style>
  