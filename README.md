- We can use the following commands to debug the helm charts and templates.

```
# This command takes a path to a chart and runs a series of tests to verify that the chart is well-formed.
helm lint

# This command will output the release values installed to the cluster.
helm get values

# Using this function we can check all the resource manifests and ensure that all the templates are working fine.
helm install --dry-run

# This command will output the manifests that are running in the cluster.
helm get manifest

# It will output the differences between the two revisions.
helm diff
helm diff revision nginx-chart 1 2

helm install release-name helm-chart --values env/prod-values.yaml

helm upgrade release-name ./helm-chart

helm uninstall release-name

helm rollback release-name 2

helm install node-app-prod . --values  ./env/prod-values.yaml
helm install node-app-dev . --values  ./env/dev-values.yaml
```

- Build image

```
docker build . -t 080197/hello-kube
```

# Ref

- https://devopscube.com/create-helm-chart/
- https://viblo.asia/p/kubernetes-series-bai-4-services-expose-traffic-cho-pod-Ljy5VDm9Zra#_nodeport-6
