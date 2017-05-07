#pragma strict

var dist : float;
var target : Transform;

function Start () {
    transform.rotation = Quaternion.identity;
}

function Update () {
    var relativePos = target.position - transform.position;
    transform.rotation = new Quaternion.LookRotation(relativePos);
}

function OnDrawGizmos(){
    var rotationMatrix : Matrix4x4 = Matrix4x4.TRS(transform.position, transform.rotation, transform.lossyScale);
    Gizmos.matrix = rotationMatrix;

    var x_axis = new Vector3(dist,0,0);
    var y_axis = new Vector3(0,dist,0);
    var z_axis = new Vector3(0,0,dist);

    Gizmos.color = Color.red;
    Gizmos.DrawLine (transform.position, transform.position+x_axis);
    Gizmos.DrawLine (transform.position, transform.position-x_axis);

    Gizmos.color = Color.blue;
    Gizmos.DrawLine (transform.position, transform.position+y_axis);
    Gizmos.DrawLine (transform.position, transform.position-y_axis);

    Gizmos.color = Color.green;
    Gizmos.DrawLine (transform.position, transform.position+z_axis);
    Gizmos.DrawLine (transform.position, transform.position-z_axis);
}