#pragma strict

var capsule : GameObject;
var xRotor : GameObject;
var yRotor : GameObject;
var zRotor : GameObject;
var interpolation : GameObject;

private var capsule_init : Quaternion;
private var xRotor_init : Quaternion;
private var yRotor_init : Quaternion;
private var zRotor_init : Quaternion;

function Start () {
    capsule_init = capsule.transform.rotation;
    xRotor_init = xRotor.transform.rotation;
    yRotor_init = yRotor.transform.rotation;
    zRotor_init = zRotor.transform.rotation;
}

function Update () {

}

function reset() {
    if(interpolation.GetComponent.<Interpolation>().is_interpolated()){
        xRotor.GetComponent.<Renderer> ().material.color.a = 1;
        yRotor.GetComponent.<Renderer> ().material.color.a = 1;
        zRotor.GetComponent.<Renderer> ().material.color.a = 1;

        xRotor.GetComponent.<Renderer> ().material.SetFloat ("_Mode", 0);
        xRotor.GetComponent.<Renderer> ().material.SetInt("_SrcBlend", UnityEngine.Rendering.BlendMode.One);
        xRotor.GetComponent.<Renderer> ().material.SetInt("_DstBlend", UnityEngine.Rendering.BlendMode.Zero);
        xRotor.GetComponent.<Renderer> ().material.SetInt("_ZWrite", 1);
        xRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHATEST_ON");
        xRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHABLEND_ON");
        xRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHAPREMULTIPLY_ON");
        xRotor.GetComponent.<Renderer> ().material.renderQueue = -1;

        yRotor.GetComponent.<Renderer> ().material.SetFloat ("_Mode", 0);
        yRotor.GetComponent.<Renderer> ().material.SetInt("_SrcBlend", UnityEngine.Rendering.BlendMode.One);
        yRotor.GetComponent.<Renderer> ().material.SetInt("_DstBlend", UnityEngine.Rendering.BlendMode.Zero);
        yRotor.GetComponent.<Renderer> ().material.SetInt("_ZWrite", 1);
        yRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHATEST_ON");
        yRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHABLEND_ON");
        yRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHAPREMULTIPLY_ON");
        yRotor.GetComponent.<Renderer> ().material.renderQueue = -1;

        zRotor.GetComponent.<Renderer> ().material.SetFloat ("_Mode", 0);
        zRotor.GetComponent.<Renderer> ().material.SetInt("_SrcBlend", UnityEngine.Rendering.BlendMode.One);
        zRotor.GetComponent.<Renderer> ().material.SetInt("_DstBlend", UnityEngine.Rendering.BlendMode.Zero);
        zRotor.GetComponent.<Renderer> ().material.SetInt("_ZWrite", 1);
        zRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHATEST_ON");
        zRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHABLEND_ON");
        zRotor.GetComponent.<Renderer> ().material.DisableKeyword("_ALPHAPREMULTIPLY_ON");
        zRotor.GetComponent.<Renderer> ().material.renderQueue = -1;

        capsule.transform.rotation = interpolation.GetComponent.<Interpolation>().get_last_rotation();
        Debug.Log( capsule.transform.rotation);
    }
}