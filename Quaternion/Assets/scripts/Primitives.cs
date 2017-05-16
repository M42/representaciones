using System;
    public Color color = Color.blue;

        GetComponent<MeshCollider>().sharedMesh = Torus();
        mesh.vertices = vertices;
        mesh.triangles = triangles;
        mesh.RecalculateBounds();
        mesh.RecalculateNormals();
        mesh.Optimize();
        GetComponent<Renderer>().material.color = color;

        return mesh;

}