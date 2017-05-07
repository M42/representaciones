#pragma strict

function Start () {

}

function Update () {
    if (Input.GetKey ("space"))
        transform.RotateAround (Vector3.zero, Vector3.up, 20 * Time.deltaTime);
}