#pragma strict

function Start () {

}

function Update () {

}

function OnDrawGizmos(){
    var dist = 100000;
    var x_axis = new Vector3(dist,0,0);
    var y_axis = new Vector3(0,dist,0);
    var z_axis = new Vector3(0,0,dist);

    Gizmos.color = Color.white;
    Gizmos.DrawLine (transform.position, transform.position+x_axis);
    Gizmos.DrawLine (transform.position, transform.position-x_axis);

    Gizmos.DrawLine (transform.position, transform.position+y_axis);
    Gizmos.DrawLine (transform.position, transform.position-y_axis);

    Gizmos.DrawLine (transform.position, transform.position+z_axis);
    Gizmos.DrawLine (transform.position, transform.position-z_axis);
}