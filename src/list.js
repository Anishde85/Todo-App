import './App.css';
import './index.css';
import React, { Component ,useState} from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { Button} from 'react-bootstrap';
import db from './firebase.config.js'
function Tasks(props)
{
    function deleteitem()
    {
        var arr=props.arr;
        var heading=firebase.auth().currentUser.uid;
        function arrayRemove(arr, value) 
        {
            var index = arr.indexOf(value);
            if (index > -1) 
            {
                arr.splice(index, 1);
            }
            return arr;
        }
        arrayRemove(arr,props.task);
        var blogRef = db.collection("todo");
        blogRef.doc(heading).set({
            blogs:arr
        });
    }
    return(
        <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 ml-10 w-full cards">
            <div class="px-2 py-10">
                <div class="font-bold text-xl mb-2">{props.task}</div>
            </div>
            <button type="button" class="btn btn-light" onClick={deleteitem}>Delete</button>
        </div>
    );
}
function Home(props)
{
    var arr=[];
    const [Task,setTask]=useState('');
    const [List,setList]=useState([]);
    const [state,setState]=useState(0);
    if (firebase.auth().currentUser==null)
    {
        props.history.push('/');
        return (
            <div></div>
        );
    }
    var heading=firebase.auth().currentUser.uid;
    function taskchange(e)
    {
        setTask(e.target.value);
    }
    userlist();
    function user()
    {
        List.push(Task);
        setList(List);
        var blogRef = db.collection("todo");
        blogRef.doc(heading).set({
            blogs:List,
        });
    }
    function userlist (props)
    {
        var docRef = db.collection("todo").doc(heading);
        docRef.get().then((doc) => {
        if (doc.exists) 
        {
            setList(doc.data()["blogs"]);
        }
        else
        {
            console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    function signout(props)
    {
        firebase.auth().signOut().then(() => {
            props.history.push('/');
            return (
                <div></div>
            );
          }).catch((error) => {
            console.log(error);
          });
    }
    return (
        <div className="App">
            <div class="shadow-lg p-3 mb-5 rounded head">
                <h3>Task List</h3>
                <p align="right"><a href={"/"} style={{color:'blue'}}>Logout</a></p>
            </div>
            <div class="row">
                    {List.map((user) => (
                        <div class="col-md-3">
                        <Tasks
                            task={user}
                            arr={List}
                        />
                        </div>
                    ))}
            </div>
            <div>
                <h3>Add a New Task</h3>        
                <div className="form-group">
                    <input type="text" onChange={taskchange} className="form-control" placeholder="Enter Blog" />
                    <button type="submit" className="btn btn-primary" onClick={user}>Submit</button>
                </div>
            </div>
        </div>
    );
}
export default Home;