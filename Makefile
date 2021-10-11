.PHONY: build

build:
	docker build . -t quay.io/aneeshkp/cloud-native-eventserver:latest && \
	docker push quay.io/aneeshkp/cloud-native-eventserver:latest
# Deploy all in the configured Kubernetes cluster in ~/.kube/config
deploy:
	kubectl apply -f ./manifests

