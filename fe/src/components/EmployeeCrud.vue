<template>
    <div id="crudapp">
      <h2>Đăng kí nhân viên</h2>
 <form @submit.prevent="save">
  <div class="form-group">
    <label>Tên nhân viên</label>
    <input type="text" v-model="employee.name" class="form-control"  placeholder="Tên nhân viên" ref="inputName" value="employee.name">
   
  </div>
  <div class="form-group">
    <label>Địa chỉ nhân viên</label>
    <input type="text" v-model="employee.address" class="form-control"  placeholder="Địa chỉ nhân viên">
   
  </div>

  <div class="form-group">
    <label>Số điện thoại</label>
    <input type="text" v-model="employee.phone" class="form-control"  placeholder="Số điện thoại">
   
  </div>

  <button type="submit" class="btn">Create</button>
</form>
      <h2>Bảng nhân viên</h2>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tên nhân viên</th>
      <th scope="col">Địa chỉ</th>
      <th scope="col">Số điện thoại</th>
      <th scope="col">Tùy chọn</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="employee in result" v-bind:key="employee._id">
          
          <td>{{ employee._id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.address }}</td>
          <td>{{ employee.phone }}</td>
          <td>
            <button type="button" class="btn-warning" @click="edit(employee)">Edit</button>
            <button type="button" class="btn-danger"  @click="remove(employee)">Delete</button>
          </td>
        </tr>
    
  </tbody>
</table>
     
    </div>
  </template>
  
  <script>
    import Vue from 'vue';
    import axios from 'axios';


    Vue.use(axios)


  export default {
    name: 'EmployeeCrud',
    data () {
      return {
        result: {},
        employee:{
                   _id: '',
                   name: '',
                   address: '',
                   phone: ''
        }
      }
    },
    created() { 
        this.EmployeeLoad();
    },
    mounted() {
          console.log("mounted() called.......");
         
      },

    methods: {
           // load data from db
           EmployeeLoad()
           {
                 var page = "http://localhost:3000/user/getAll";
                 axios.get(page)
                  .then(
                      ({data})=>{
                        // console.log(data);
                        this.result = data.data;
                      }
                  );
           },
           // create employee 
           save()
           {
            if(this.employee._id == '')
              {
                this.saveData();
              }
              else
              {
                this.updateData();
              }       

           },
           saveData()
           {
            axios.post("http://localhost:3000/user/create", this.employee)
            .then(
              ({data})=>{
                console.log('da luu' + data);
                alert("saveddddd");
                this.EmployeeLoad();
              }
            )

           },
           edit(employee)
           {
            this.employee = employee;
           
           },
           updateData()
           {
              var editrecords = 'http://localhost:3000/user/update/'+ this.employee._id;
              axios.patch(editrecords, this.employee)
              .then(
                ({data})=>{
                  console.log('da update' + data);
                  this.employee.name = '';
                  this.employee.address = '';
                  this.employee.phone = '';
                  this.id = '';
                  alert("Updated!!!");
                  this.EmployeeLoad();
                }
              );

           },

           remove(employee){
             var url = `http://localhost:3000/user/delete/${employee._id}`;
              axios.delete(url);
              alert("Deleteddd");
              this.EmployeeLoad();
            }
      }
  }
  </script>
<style>
#crudapp {
  background-color: #e2f0ff;
  width: 100%;
  height: 100%;
  padding: 50px 100px;
}
#crudapp h2 {
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
form {
  margin: 50px 385px;
}
.form-group {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.form-group label {
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 20px;
  line-height: 30px;
}
.form-group input {
  width: 400px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #DDDDDD;
}
.form-group input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}
.btn {
  width: 100px;
  height: 30px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #68B75B;
  color: #ffffff;
  cursor: pointer;
  line-height: 30px;
}
.btn:hover {
  color: #68B75B;
  background-color: #ffffff;
  border: 1px solid #68B75B;
}
table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border: 2px solid #DDDDDD;
}
table thead th {
  border: 2px solid #DDDDDD;
  padding: 10px 0;
}
table tbody td {
  border: 2px solid #DDDDDD;
}
table tr {
  padding: 20px 0;
  border: 2px solid #DDDDDD;
}
.btn-warning {
  background-color: #3F79B7;
  color: #ffffff;
  cursor: pointer;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  border: none;
  margin: 10px;
}
.btn-warning:hover {
  color: #3F79B7;
  background-color: #ffffff;
  border: 1px solid #3F79B7;
}
.btn-danger{
  background-color: #D3544F;
  color: #ffffff;
  cursor: pointer;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  border: none;
}
.btn-danger:hover {
  color: #D3544F;
  background-color: #ffffff;
  border: 1px solid #D3544F;
}

</style>