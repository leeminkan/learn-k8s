# Usage

```
helm repo add external-secrets https://charts.external-secrets.io
helm install external-secrets external-secrets/external-secrets

kubectl apply -f akeyless-secret-creds.yml
kubectl apply -f akeyless-secret-store.yml
kubectl apply -f akeyless-external-secret.yml
kubectl apply -f akeyless-external-secret-json.yml
```

# Ref

- https://faun.pub/akeyless-secret-management-with-external-secrets-operator-in-local-kubernetes-b30ae309d5f9
- https://external-secrets.io/latest/provider/akeyless/
- https://docs.akeyless.io/docs/how-to-provision-secret-to-your-k8s
